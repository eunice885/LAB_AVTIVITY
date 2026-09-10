# Lab 01 Notes

The console output was:

A-sync
E-sync
B-click
D-microtask
C-timeout

The synchronous code runs first. When the button is clicked,
the click event runs. The Promise microtask runs before the
setTimeout callback.