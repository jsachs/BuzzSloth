'use strict';

console.log('BuzzSloth Option');

function save_words() {
  console.log("saving");
  localStorage['words'] = document.getElementById('words').value;
  var status = document.getElementById('status');
  status.textContent = 'Options saved.';
  setTimeout(function() {
    status.textContent = '';
  }, 750);
}

function load_words() {
  document.getElementById('words').value = localStorage['words'];
}

document.addEventListener('DOMContentLoaded', load_words);
document.getElementById('save').addEventListener('click', save_words);
