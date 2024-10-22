const theme_map = [
  ["#5773ff", "#fff"],
  ["#fc5e41", "#fff"],
  ["#ff4061", "#fff"],
  ["#000", "#fff"],

  ["#5773ff", "#32323d"],
  ["#932cb3", "#171c28"],
  ["#10a4fe", "#0d0e10"],
  ["#ff808f", "#1d1f3e"],
  ["#e41818", "#080808"],

  ["#f5abce", "#f6e2ee"],
  ["#FDFFD2", "#667BC6"],
  ["#FEFFD2", "#FFBF78"],
  ["#4A249D", "#009FBD"],
];
var theme_index = theme_map.length - 1

function swapIcon(elem) {
  if (elem.firstElementChild.innerHTML == "play_arrow") {
    elem.firstElementChild.innerHTML = "pause"
  } else {
    elem.firstElementChild.innerHTML = "play_arrow"
  }
}

function progressTheme() {
  theme_index = (theme_index + 1) % theme_map.length
  document.documentElement.style.setProperty("--colour-primary", theme_map[theme_index][0])
  document.documentElement.style.setProperty("--colour-secondary", theme_map[theme_index][1])
}

progressTheme()