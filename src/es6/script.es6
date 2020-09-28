//
// Respo - script.es6
// =============================================================================

$(document).ready(() => {
  // Change iFrame on a Button Click Event
  $('.btn').on('click', () => {
    $('iframe').attr('src', $('#url').val())
  })
})

// Get URL from form
function getUrlVars () {
  let vars = [], hash
  const hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')

  for (let i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=')
    vars.push(hash[0])
    vars[hash[0]] = hash[1]
  }

  return vars
}

let first = getUrlVars()['url']
first = decodeURIComponent(first)
first = first.replace(/#$/, '')

if (first !== 'undefined') {
  // take the url variable and update the iframes and input field
  $('iframe').attr('src', (first))
  $('#url').attr('value', (first))
}

function randomColorChange () {
  let hue =
    'rgba(' +
    Math.floor(Math.random() * 256) + ',' +
    Math.floor(Math.random() * 256) + ',' +
    Math.floor(Math.random() * 256) + ', 0.6)'

  return hue
}

$('.random').css('background-color', randomColorChange)
