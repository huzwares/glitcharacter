# glitcharacter
kinda glitch effect
~~~~
<span id="glitchSpan">this is sample text</span>

<script>
var glitchTest = new glitch("glitchSpan", "random", "#aA!", 5, 100, 1000);
glitchTest.start();
</script>
~~~~

glitch(id, index of character to glitch or just "random", mask, number between 0 to 10, random time start rage in milisecond,  random time stop rane in milisecond)


masks:

#: Numbers

a: Lower case

A: Upper case

!: Special characters

npm i glitcharacter.js
