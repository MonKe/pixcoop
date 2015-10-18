var Maker = {
  init: function (book) {
    // player init
    Player.init (book)
    // add dom hooks
    IO.dom.editBtn = document.getElementById ('editBtn')
    IO.dom.editLayer = document.getElementById ('editLayer')
    IO.dom.editArea = document.getElementById ('editArea')
    IO.dom.linkPicker = document.getElementById ('linkPicker')
    IO.dom.linkEditor = document.getElementById ('linkEditor')
    IO.dom.brushPicker = document.getElementById ('brushPicker')
    IO.dom.printBtn = document.getElementById ('printBtn')
    IO.dom.printArea = document.getElementById ('printArea')
    // add templates
    IO.tpl.editCell = document.querySelector ('#editLayer div').outerHTML
    IO.tpl.imgPick = document.querySelector ('#imgPicker a').outerHTML
    IO.tpl.linkPick = document.querySelector ('#linkPicker a').outerHTML
    IO.tpl.linkEditor = document.querySelector ('#linkEditor').innerHTML
    IO.tpl.brush = document.querySelector ('#brushPicker a').outerHTML
    // configure sidebar
    document.querySelector ('aside').setAttribute ('style', 'max-width: '
      + (Conf.unit * 16) + 'px')
    // setup edit booleans
    IO.now.drawing = false
    IO.now.linkDrawing = false
    // setup pickers
    // imgPicker
    document.getElementById ('imgPicker')
      .innerHTML = Conf.imgPal.map (function (x, i) {
        return Str.render (IO.tpl.imgPick, {
          pick: (i).toString (16),
          bg: x,
          size: Conf.unit * 2
        })
      }).join ('')
    // imgPick btn & event
    var imgPickList = document.querySelectorAll ('#imgPicker a')
    imgPickList[0].setAttribute ('class', 'focus')
    IO.now.imgPick = imgPickList[0].getAttribute ('href').slice (1)
    for (var i = 0; i < imgPickList.length; i++)
      imgPickList[i].onclick = function (e) {
        El.setFocus (e.target)
        IO.now.imgPick = e.target.getAttribute ('href').slice (1)
        if (IO.now.linkDrawing) {
          IO.now.linkDrawing = false
          if (IO.now.linkPick !== '0') Maker.saveLink ()
          IO.dom.linkEditor.innerHTML = ''
        }
        return false
      }
    // linkPicker
    var linkPickerBuff = ''
    for (var i = 0; i < Conf.hitPalLength; i++) {
      linkPickerBuff += Str.render (IO.tpl.linkPick, {
        pick: (i).toString (16),
        size: Conf.unit * 2
      })
    }
    document.getElementById ('linkPicker').innerHTML = linkPickerBuff
    // linkPick btn & event
    var linkPickList = document.querySelectorAll ('#linkPicker a')
    IO.now.linkPick = linkPickList[0].innerHTML
    for (var i = 0; i < linkPickList.length; i++)
      linkPickList[i].onclick = function (e) {
        var pick = e.target.innerHTML
        if (! IO.now.linkDrawing) IO.now.linkDrawing = true
        else if (IO.now.linkPick !== '0') Maker.saveLink ()
        El.setFocus (e.target)
        IO.now.linkPick = pick
        if (pick !== '0') {
          var palPick = IO.now.book[IO.now.page].linkPal[pick],
            title = palPick && palPick.title ? palPick.title : '',
            page = palPick && palPick.page ? palPick.page : ''
          IO.dom.linkEditor.innerHTML = Str
            .render (IO.tpl.linkEditor, { title: title, page: page })
        }
        else IO.dom.linkEditor.innerHTML = ''
        return false
      }
    // linkEditor
    IO.dom.linkEditor.innerHTML = ''
    // brushPicker
    IO.now.brush = 0
    IO.dom.brushPicker.innerHTML = 'size ' + Conf.brush.map (function (x) {
      return Str.render (IO.tpl.brush, {
        brush: x + 1
      }) + ' '
    }).join ('')
    // brush events
    var brushList = document.querySelectorAll ('#brushPicker a')
    for (var i = 0; i < brushList.length; i++)
      brushList[i].onclick = function (e) {
        IO.now.brush = +e.target.innerHTML - 1
        return false
      }
    // hook events
    document.onmouseup = function (e) {
      IO.now.drawing = false
      return false
    }
    IO.dom.editBtn.onclick = function (e) {
      var req = e.target.getAttribute ('href').slice (1)
      if (req === 'open') {
        Maker.open ()
      }
      else {
        Maker.close ()
      }
      return false
    }
    IO.dom.printBtn.onclick = function (e) {
      Maker.close ()
      IO.dom.printArea.innerHTML = JSON.stringify (IO.now.book)
      IO.dom.printArea.select ()
      return false
    }
  },
  open: function (e) {
    IO.dom.editBtn.setAttribute ('href', '#close')
    IO.dom.editBtn.innerHTML = 'Stop edit'
    var page = IO.now.book[IO.now.page],
      imgMtx = Str.toMtx (Cramm.decode (page.imgMap), Conf.width),
      linkMtx = Str.toMtx (Cramm.decode (page.linkMap), Conf.width)
    IO.dom.editLayer.setAttribute ('style', 'width: ' + Conf.width * Conf.unit
      + 'px; height: ' + Conf.height * Conf.unit + 'px')
    IO.dom.editArea.setAttribute ('style', '')
    var buff = ''
    for (var y = 0; y < Conf.height; y++) {
      for (var x = 0; x < Conf.width; x++)
        buff += Str.render (IO.tpl.editCell, {
          size: Conf.unit,
          x: x, y: y, link: linkMtx[y][x]
        })
    }
    IO.dom.editLayer.innerHTML = buff
    // hook events
    var cellList = document.querySelectorAll ('#editLayer div')
    for (var i = 0; i < cellList.length; i++) {
      cellList[i].onmousedown = function (e) {
        IO.now.drawing = true
        Maker.refreshCell (page, imgMtx, linkMtx, e)
        return false
      }
      cellList[i].onmouseenter = function (e) {
        if (IO.now.drawing) Maker.refreshCell (page, imgMtx, linkMtx, e)
        return false
      }
    }
  },
  refreshCell: function (page, imgMtx, linkMtx, e) {
    var pos = e.target.getAttribute ('data-pos').split (','),
      x = +pos[0], y = +pos[1]
    if (! IO.now.linkDrawing) {
      Maker.paint (x, y, imgMtx, IO.now.imgPick)
      page.imgMap = Cramm.encode (Mtx.toStr (imgMtx))
      Player.refreshImg (imgMtx, Conf.imgPal, Conf.unit)
    }
    else {
      Maker.paint (x, y, linkMtx, IO.now.linkPick)
      page.linkMap = Cramm.encode (Mtx.toStr (linkMtx))
      Maker.refreshEditLink (linkMtx)
    }
  },
  refreshEditLink: function (linkMtx) {
    var cellList = document.querySelectorAll ('#editLayer div')
    for (var i = 0; i < cellList.length; i++) {
      var pos = cellList[i].getAttribute ('data-pos').split (','),
        x = +pos[0], y = +pos[1]
      cellList[i].innerHTML = linkMtx[y][x]
    }
  },
  paint: function (x, y, mtx, pick) {
    for (var by = y - IO.now.brush; by < y + IO.now.brush + 1; by++) {
      for (var bx = x - IO.now.brush; bx < x + IO.now.brush + 1; bx++)
        mtx[by][bx] = pick
    }
  },
  close: function (e) {
    IO.dom.editBtn.setAttribute ('href', '#open')
    IO.dom.editBtn.innerHTML = 'Edit'
    if (IO.now.linkDrawing && IO.now.linkPick !== '0')
      Maker.saveLink ()
    IO.dom.editLayer.setAttribute ('style', 'display: none')
    IO.dom.editArea.setAttribute ('style', 'display: none')
    Player.refresh ()
  },
  makePage: function () {
    var baseMap = '(0' + (Conf.width * Conf.height).toString (16) + ')'
    return {
      imgMap: baseMap, linkMap: baseMap,
      linkPal: {}
    }
  },
  saveLink: function () {
    var inputList = document.querySelectorAll ('#linkEditor input'),
      title = inputList[0].value, page = inputList[1].value
    if (page && ! IO.now.book[page]) IO.now.book[page] = Maker.makePage ()
    IO.now.book[IO.now.page].linkPal[IO.now.linkPick] = { title: title, page: page }
  }
}

var El = {
  setFocus: function (el) {
    var last = document.querySelector ('.focus').getAttribute ('class')
      .replace (/ ?focus/, ''),
      now = el.getAttribute ('class') + ' focus'
    document.querySelector ('.focus').setAttribute ('class', last)
    el.setAttribute ('class', now)
  }
}
