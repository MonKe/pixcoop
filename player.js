var Player = {
  init: function (book) {
    // setup global state var
    IO = { dom: {}, tpl: {}, now: {} }
    // hook dom containers
    // main app zones
    IO.dom.h1 = document.querySelector ('h1')
    // canvas
    IO.dom.imgLayer = document.getElementById ('imgLayer')
    // buffer canvas
    IO.dom.imgBuffer = document.createElement ('canvas')
    // links
    IO.dom.linkLayer = document.getElementById ('linkLayer')
    IO.tpl.link = document.querySelector ('#linkLayer a').outerHTML
    // title
    IO.dom.title = document.getElementById ('title')
    // bubble to other funcs
    Player.setBook (book)
  },
  setBook: function (book) {
    IO.now.book = book
    Player.setPage (Object.keys (book)[0])
  },
  setPage: function (page) {
    IO.now.page = IO.dom.h1.innerHTML = page
    Player.refresh ()
  },
  refresh: function () {
    var page = IO.now.book[IO.now.page],
      // open matrices from cramm data
      imgMtx = Str.toMtx (Cramm.decode (page.imgMap), Conf.width, true),
      linkMtx = Str.toMtx (Cramm.decode (page.linkMap), Conf.width, true)
    // sure way to make the canvas at proper size
    IO.dom.imgLayer.width = IO.dom.imgBuffer.width = IO.dom.linkLayer.width
      = Conf.width * Conf.unit
    IO.dom.imgLayer.height = IO.dom.imgBuffer.height = IO.dom.linkLayer.height
      = Conf.height * Conf.unit
    // replace img
    Player.refreshImg (imgMtx, Conf.imgPal, Conf.unit)
    // replace links
    Player.refreshLink (linkMtx, page.linkPal, Conf.unit)
  },
  refreshImg (mtx, pal, unit) {
    var buffCtx = IO.dom.imgBuffer.getContext ('2d'),
      imgCtx = IO.dom.imgLayer.getContext ('2d')
    // run the matrix
    mtx.forEach (function (row, y) {
      row.forEach (function (cell, x) {
        buffCtx.fillStyle = '#'+ pal[parseInt (cell, 16)]
        buffCtx.fillRect (x * unit, y * unit, unit, unit)
      })
    })
    // draw buffer to img
    imgCtx.drawImage (IO.dom.imgBuffer, 0, 0)
  },
  refreshLink (mtx, pal, unit) {
    // build links as horizontal slices
    var sliceList = [], last = '0' // { link: '1', row: 2, start: 3, end: 8 }
    mtx.forEach (function (row, y) {
      row.forEach (function (cell, x) {
        if (cell !== last) {
          if (pal[last] && (pal[last].page || pal[last].title)) {
            if (last !== '0' && sliceList.length > 0)
              sliceList[sliceList.length - 1].end = x - 1
          }
          if (pal[cell] && (pal[cell].page || pal[cell].title)) {
            if (cell !== '0')
              sliceList.push ({ link: cell, row: y, start: x })
          }
          last = cell
        }
      })
      // close unfinished link
      if (sliceList.length > 0 && ! sliceList[sliceList.length - 1].end)
        sliceList[sliceList.length - 1].end = row.length
    })
    // render sliceList
    IO.dom.linkLayer.innerHTML = sliceList.map (function (slice) {
      return Str.render (IO.tpl.link, {
        title: pal[slice.link].title,
        page: pal[slice.link].page,
        left: slice.start * unit, top: slice.row * unit,
        width: (slice.end - slice.start + 1) * unit, height: unit
      })
    }).join ('')
    // hook click event to links
    var domLink = document.querySelectorAll ('#linkLayer a')
    for (var i = 0; i < domLink.length; i++) {
      domLink[i].onclick = function (e) {
        IO.dom.title.setAttribute ('style', 'display: none')
        e.target.title = IO.now.title
        IO.now.title = ''
        if (e.target.getAttribute ('href') !== '#')
          Player.setPage (e.target.getAttribute ('href').slice (1))
        return false
      }
      domLink[i].onmouseenter = function (e) {
        if (e.target.title) {
          // make it the right size
          IO.dom.title.setAttribute ('style', 'padding: ' + Conf.unit + 'px')
          IO.dom.title.innerHTML = e.target.title
          // compute pos relatively to the link
          var x = (+ e.target.style.left.slice (0, -2))
              - Math.floor ((IO.dom.title.clientWidth - e.target.clientWidth) / 2),
            y = (+ e.target.style.top.slice (0, -2))
          if (y > IO.now.book[IO.now.page].height * Conf.unit / 3) y -= IO.dom.title.clientHeight + Conf.unit
          else y += IO.dom.title.clientHeight - Conf.unit
          IO.dom.title.setAttribute ('style', 'top: ' + y + 'px; left: '
            + x + 'px; padding: ' + Conf.unit + 'px')
          IO.now.title = IO.dom.title.innerHTML
          e.target.title = ''
        }
        return false
      }
      domLink[i].onmouseleave = function (e) {
        IO.dom.title.setAttribute ('style', 'display: none')
        e.target.title = IO.now.title
        IO.now.title = ''
        return false
      }
    }
  }
}
