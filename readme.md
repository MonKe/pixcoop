# pixcoop
*A tiny client-side tool based on the awesome
[playpen](http://playpen.farbs.org) idea.*

Coded in a rush (3 days including *this*), meant to provide with a
point-and-click adventures reader and a editor to make the damn things. Just in
case I keep you wondering: the giant pixels *are a feature*.

## This file is long, give me an example

This repo has a `forest` branch, which is a little example you can play by
opening `player.html` in your browser. I also made a `gh-pages` branch so you
can play [here](http://monke.github.io/pixcoop) and edit (but not save)
[here](http://monke.github.io/pixcoop/edit). There.

## How it's supposed to work

`player.js` has everything you need to read an adventure book -- it just needs
a book and an initialization (shown in `player.html`).

`maker.js` is the editor accessed in `maker.html`. both html files are almost
the same thing, given that the *maker* is meant to be the lightest possible
overlay. ok, still heavy enough.

I usually run them side by side:

1. I put together the `book.js` file based on what I want (size, 1st content,
  1st page title). **Rush job: no safeguards here, careful what you
  input[1][].** The defaults can be a good tiny starter.
2. I run the `maker.html` in the browser (currently firefox-only tested):
  * a click on the edit button.
  * select from the color palette and draw.
  * select a link type apart from zero (no link): you can fill the title
    (giving you a nice tooltip), the page only (hidden area to click on) or
    both.
  * you can change brush size, given the lousy implementation it's sloow on link
    draw and quite useless with the defaults pix size and grid dimensions.
  * when you're done, *print button*: working with local files, your `book.js`
    file ain't gonna write itself! and there's no local storage either, so copy
    and paste just like old times (howdy).
  * You can follow the links to the new pages you created and keep drawing.
3. As `player.html` runs the same book as a default, you can test your adventure
  in parallel.

## Customizing

Even though it's a mess, you should be able to edit a few things:

* the `book.js` file: `imgMap` & `linkMap` look like chinese-encoded strings,
  because of `lib.js/Cramm`. It's a little something I used to compress the
  giant char matrices produced by the editor (it was really stuffy to just
  *review* it), it has a decode and and encode method, you can use it, or
  replace it by a *better lossless compression algorithm*. I can think of at
  list 4 of them, but I didn't go to algorithm school so they're still a bit
  beyond me.
* the `conf.js/Conf` object defines:
  * the size of your page.
	*  the size of a pixel... in pixels.
	* the different brush sizes.
	* your **color palette** (16 colors only).

Well I guess... Have fun!

Many thanks to [Farbs](http://farbs.org/) for the original idea and allowing my
rants.

[1]: # "You're gonna break everything."
