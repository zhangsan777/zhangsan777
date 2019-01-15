
var sections = document.querySelectorAll('section');

function getNextSlideIndex() {
  var next_slide_index;

  Array.prototype.forEach.call(sections, function(section, index) {
    if (section.classList.contains('active')) {
      next_slide_index = (index + 1);
    }
  });

  return next_slide_index < sections.length ? next_slide_index : -1;
}

function sectionsHandler(section, index) {
  section.addEventListener('click', sectionClickHandler);
}

function sectionClickHandler() {
  var next_slide_index = getNextSlideIndex.call(this);

  if (this.classList.contains('active')) {
    if (next_slide_index > -1) {
      sections[next_slide_index].classList.add('active');
    }

    this.classList.add('leave');
    this.classList.remove('active');
  }
}

function resetHandler() {
  for (var i = sections.length - 1; i >= 0; i--) {
    (function(index) {
      sections[index].classList.remove('leave');
      sections[index].scrollTop = 0;
    }(i));
  }
  sections[0].classList.add('active');
}

Array.prototype.forEach.call(sections, sectionsHandler);

document.querySelector('button').addEventListener('click', resetHandler);
