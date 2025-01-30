
function getParticleSize({particleHeight, spriteWidth, spriteHeight}) {
  // Input
  console.log(
`-----[getParticularSize function]-----

[Input]
Sprite resolution: ${spriteWidth}x${spriteHeight}
`
  );

  let spriteRatio = spriteWidth / spriteHeight;
  let size = (particleHeight / 2) * spriteRatio;
  let particleWidth = particleHeight * spriteRatio;

  // Error
  if (size > 1000) {
    console.log(
`[Error]
Size is out of range: size=${size} (available range is 0-1000)
Try to reduce width or increase height of sprite comp
`
    );

    return;
  }

  // Guide
  console.log(
`[Guide]
1. 'Sprite comp' must have 'Rasterize' disabled
2. Inside the 'sprite comp' all layers must be precomposed (must have default transform)
`
  );

  // Result
  console.log(
`[Result]
To get ${particleWidth.toFixed(0)}x${particleHeight.toFixed(0)} particle, use size=${size.toFixed(3)}
`
  );
}

function getParticleResolution({size, spriteWidth, spriteHeight}) {
  // Input
  console.log(
`-----[getParticularResolution function]-----

[Input]
Size: ${size}
Sprite resolution: ${spriteWidth}x${spriteHeight}
`
  );

  let spriteRatio = spriteWidth / spriteHeight;
  let particleHeight = size * 2 / spriteRatio ;
  let particleWidth = particleHeight * spriteRatio;

  // Result
  console.log(
`[Result]
Particle resolution is ${particleWidth.toFixed(0)}x${particleHeight.toFixed(0)}
`
  );
}

// -------------------Input-------------------

getParticleSize({
  // You want
  particleHeight: 1080,

  // You have
  spriteWidth: 1920,
  spriteHeight: 1080,
});

getParticleResolution({
  // You have
  size: 750,
  spriteWidth: 1500,
  spriteHeight: 1080,
});