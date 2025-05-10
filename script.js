gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});
locoScroll.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy('#main', {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector('#main').style.transform
    ? 'transform'
    : 'fixed',
});
ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
ScrollTrigger.refresh();

// side bar

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.right === '0px') {
    sidebar.style.right = '-250px'; // Hide sidebar
  } else {
    sidebar.style.right = '0px'; // Show sidebar
  }
}

// page 2

// var cluster = '';
// document
//   .querySelector('#page2 > .content > h2')
//   .textContent.split(' ')
//   .forEach((word) => {
//     cluster += `<span> ${word}</span>`;
//     document.querySelector('#page2 > .content > h2').innerHTML = cluster;
//   });

const page2 = document.querySelector('#page2 > .content > h2');
if (page2) {
  const words = page2.textContent.trim().split(/\s+/); // handles multiple spaces too
  page2.innerHTML = words.map((word) => `<span>${word} </span>`).join('');
}

gsap.to('#page2 > .content > h2 > span', {
  scrollTrigger: {
    trigger: '#page2 > .content > h2 > span',
    scroller: '#main',
    start: 'top 80%',
    end: 'top 20%',
    scrub: 0.5,
    // markers: true,
  },
  stagger: 0.1,
  color: '#fff',
});

// page 3

function setupCanvasPage3() {
  const canvas = document.querySelector('#page3>canvas');
  const context = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  function files(index) {
    var data = `
/assets/canvas/frames00007.png
/assets/canvas/frames00010.png
/assets/canvas/frames00013.png
/assets/canvas/frames00016.png
/assets/canvas/frames00019.png
/assets/canvas/frames00022.png
/assets/canvas/frames00025.png
/assets/canvas/frames00028.png
/assets/canvas/frames00031.png
/assets/canvas/frames00034.png
/assets/canvas/frames00037.png
/assets/canvas/frames00040.png
/assets/canvas/frames00043.png
/assets/canvas/frames00046.png
/assets/canvas/frames00049.png
/assets/canvas/frames00052.png
/assets/canvas/frames00055.png
/assets/canvas/frames00058.png
/assets/canvas/frames00061.png
/assets/canvas/frames00064.png
/assets/canvas/frames00067.png
/assets/canvas/frames00070.png
/assets/canvas/frames00073.png
/assets/canvas/frames00076.png
/assets/canvas/frames00079.png
/assets/canvas/frames00082.png
/assets/canvas/frames00085.png
/assets/canvas/frames00088.png
/assets/canvas/frames00091.png
/assets/canvas/frames00094.png
/assets/canvas/frames00097.png
/assets/canvas/frames00100.png
/assets/canvas/frames00103.png
assets/canvas/frames00106.png
/assets/canvas/frames00109.png
/assets/canvas/frames00112.png
/assets/canvas/frames00115.png
/assets/canvas/frames00118.png
/assets/canvas/frames00121.png
/assets/canvas/frames00124.png
/assets/canvas/frames00127.png
/assets/canvas/frames00130.png
/assets/canvas/frames00133.png
/assets/canvas/frames00136.png
/assets/canvas/frames00139.png
/assets/canvas/frames00142.png
/assets/canvas/frames00145.png
/assets/canvas/frames00148.png
/assets/canvas/frames00151.png
/assets/canvas/frames00154.png
/assets/canvas/frames00157.png
/assets/canvas/frames00160.png
/assets/canvas/frames00163.png
/assets/canvas/frames00166.png
/assets/canvas/frames00169.png
/assets/canvas/frames00172.png
/assets/canvas/frames00175.png
/assets/canvas/frames00178.png
/assets/canvas/frames00181.png
/assets/canvas/frames00184.png
/assets/canvas/frames00187.png
/assets/canvas/frames00190.png
/assets/canvas/frames00193.png
/assets/canvas/frames00196.png
/assets/canvas/frames00199.png
/assets/canvas/frames00202.png
`;
    return data.split('\n')[index];
  }
  const frameCount = 67;
  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: 'frame',
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#page3`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: '#page3',
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
setupCanvasPage3();

// page 4

const page4 = document.querySelector('#page4 > .content > h2');
if (page4) {
  const words = page4.textContent.trim().split(/\s+/); // handles multiple spaces too
  page4.innerHTML = words.map((word) => `<span>${word} </span>`).join('');
}

gsap.to('#page4 > .content > h2 > span', {
  scrollTrigger: {
    trigger: '#page4 > .content > h2 > span',
    scroller: '#main',
    start: 'top 80%',
    end: 'top 20%',
    scrub: 0.5,
    // markers: true,
  },
  stagger: 0.1,
  color: '#fff',
});

// page 5
function setupCanvasPage5() {
  const canvas = document.querySelector('#page5 > canvas');
  const context = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  function files(index) {
    var data = `
/assets/canvas/bridges00007.png
/assets/canvas/bridges00010.png
/assets/canvas/bridges00013.png
/assets/canvas/bridges00016.png
/assets/canvas/bridges00019.png
/assets/canvas/bridges00022.png
/assets/canvas/bridges00025.png
/assets/canvas/bridges00028.png
/assets/canvas/bridges00031.png
/assets/canvas/bridges00034.png
/assets/canvas/bridges00037.png
/assets/canvas/bridges00040.png
/assets/canvas/bridges00043.png
/assets/canvas/bridges00046.png
/assets/canvas/bridges00049.png
/assets/canvas/bridges00052.png
/assets/canvas/bridges00055.png
/assets/canvas/bridges00058.png
/assets/canvas/bridges00061.png
/assets/canvas/bridges00064.png
/assets/canvas/bridges00067.png
/assets/canvas/bridges00070.png
/assets/canvas/bridges00073.png
/assets/canvas/bridges00076.png
/assets/canvas/bridges00079.png
/assets/canvas/bridges00082.png
/assets/canvas/bridges00085.png
/assets/canvas/bridges00088.png
/assets/canvas/bridges00091.png
/assets/canvas/bridges00094.png
/assets/canvas/bridges00097.png
/assets/canvas/bridges00100.png
/assets/canvas/bridges00103.png
assets/canvas/fbridge00106.png
/assets/canvas/bridges00109.png
/assets/canvas/bridges00112.png
/assets/canvas/bridges00115.png
/assets/canvas/bridges00118.png
/assets/canvas/bridges00121.png
/assets/canvas/bridges00124.png
/assets/canvas/bridges00127.png
/assets/canvas/bridges00130.png
/assets/canvas/bridges00133.png
/assets/canvas/bridges00136.png
/assets/canvas/bridges00139.png
/assets/canvas/bridges00142.png
/assets/canvas/bridges00145.png
/assets/canvas/bridges00148.png
/assets/canvas/bridges00151.png
/assets/canvas/bridges00154.png
/assets/canvas/bridges00157.png
/assets/canvas/bridges00160.png
/assets/canvas/bridges00163.png
/assets/canvas/bridges00166.png
/assets/canvas/bridges00169.png
/assets/canvas/bridges00172.png
/assets/canvas/bridges00175.png
/assets/canvas/bridges00178.png
/assets/canvas/bridges00181.png
/assets/canvas/bridges00184.png
/assets/canvas/bridges00187.png
/assets/canvas/bridges00190.png
/assets/canvas/bridges00193.png
/assets/canvas/bridges00196.png
/assets/canvas/bridges00199.png
/assets/canvas/bridges00202.png
`;
    return data.split('\n')[index];
  }
  const frameCount = 67;
  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: 'frame',
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#page5`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: '#page5',
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
setupCanvasPage5();

const page6 = document.querySelector('#page6 > .content > h2');
if (page6) {
  const words = page6.textContent.trim().split(/\s+/); // handles multiple spaces too
  page6.innerHTML = words.map((word) => `<span>${word} </span>`).join('');
}

// page 6

gsap.to('#page6 > .content > h2 > span', {
  scrollTrigger: {
    trigger: '#page6 > .content > h2 > span',
    scroller: '#main',
    start: 'top 80%',
    end: 'top 20%',
    scrub: 0.5,
    // markers: true,
  },
  stagger: 0.1,
  color: '#fff',
});

// page 7

function setupCanvasPage7() {
  const canvas = document.querySelector('#page7>canvas');
  const context = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `

https://thisismagma.com/assets/home/lore/seq/1.webp?2
https://thisismagma.com/assets/home/lore/seq/2.webp?2
https://thisismagma.com/assets/home/lore/seq/3.webp?2
https://thisismagma.com/assets/home/lore/seq/4.webp?2
https://thisismagma.com/assets/home/lore/seq/5.webp?2
https://thisismagma.com/assets/home/lore/seq/6.webp?2
https://thisismagma.com/assets/home/lore/seq/7.webp?2
https://thisismagma.com/assets/home/lore/seq/8.webp?2
https://thisismagma.com/assets/home/lore/seq/9.webp?2
https://thisismagma.com/assets/home/lore/seq/10.webp?2
https://thisismagma.com/assets/home/lore/seq/11.webp?2
https://thisismagma.com/assets/home/lore/seq/12.webp?2
https://thisismagma.com/assets/home/lore/seq/13.webp?2
https://thisismagma.com/assets/home/lore/seq/14.webp?2
https://thisismagma.com/assets/home/lore/seq/15.webp?2
https://thisismagma.com/assets/home/lore/seq/16.webp?2
https://thisismagma.com/assets/home/lore/seq/17.webp?2
https://thisismagma.com/assets/home/lore/seq/18.webp?2
https://thisismagma.com/assets/home/lore/seq/19.webp?2
https://thisismagma.com/assets/home/lore/seq/20.webp?2
https://thisismagma.com/assets/home/lore/seq/21.webp?2
https://thisismagma.com/assets/home/lore/seq/22.webp?2
https://thisismagma.com/assets/home/lore/seq/23.webp?2
https://thisismagma.com/assets/home/lore/seq/24.webp?2
https://thisismagma.com/assets/home/lore/seq/25.webp?2
https://thisismagma.com/assets/home/lore/seq/26.webp?2
https://thisismagma.com/assets/home/lore/seq/27.webp?2
https://thisismagma.com/assets/home/lore/seq/28.webp?2
https://thisismagma.com/assets/home/lore/seq/29.webp?2
https://thisismagma.com/assets/home/lore/seq/30.webp?2
https://thisismagma.com/assets/home/lore/seq/31.webp?2
https://thisismagma.com/assets/home/lore/seq/32.webp?2
https://thisismagma.com/assets/home/lore/seq/33.webp?2
https://thisismagma.com/assets/home/lore/seq/34.webp?2
https://thisismagma.com/assets/home/lore/seq/35.webp?2
https://thisismagma.com/assets/home/lore/seq/36.webp?2
https://thisismagma.com/assets/home/lore/seq/37.webp?2
https://thisismagma.com/assets/home/lore/seq/38.webp?2
https://thisismagma.com/assets/home/lore/seq/39.webp?2
https://thisismagma.com/assets/home/lore/seq/40.webp?2
https://thisismagma.com/assets/home/lore/seq/41.webp?2
https://thisismagma.com/assets/home/lore/seq/42.webp?2
https://thisismagma.com/assets/home/lore/seq/43.webp?2
https://thisismagma.com/assets/home/lore/seq/44.webp?2
https://thisismagma.com/assets/home/lore/seq/45.webp?2
https://thisismagma.com/assets/home/lore/seq/46.webp?2
https://thisismagma.com/assets/home/lore/seq/47.webp?2
https://thisismagma.com/assets/home/lore/seq/48.webp?2
https://thisismagma.com/assets/home/lore/seq/49.webp?2
https://thisismagma.com/assets/home/lore/seq/50.webp?2
https://thisismagma.com/assets/home/lore/seq/51.webp?2
https://thisismagma.com/assets/home/lore/seq/52.webp?2
https://thisismagma.com/assets/home/lore/seq/53.webp?2
https://thisismagma.com/assets/home/lore/seq/54.webp?2
https://thisismagma.com/assets/home/lore/seq/55.webp?2
https://thisismagma.com/assets/home/lore/seq/56.webp?2
https://thisismagma.com/assets/home/lore/seq/57.webp?2
https://thisismagma.com/assets/home/lore/seq/58.webp?2
https://thisismagma.com/assets/home/lore/seq/59.webp?2
https://thisismagma.com/assets/home/lore/seq/60.webp?2
https://thisismagma.com/assets/home/lore/seq/61.webp?2
https://thisismagma.com/assets/home/lore/seq/62.webp?2
https://thisismagma.com/assets/home/lore/seq/63.webp?2
https://thisismagma.com/assets/home/lore/seq/64.webp?2
https://thisismagma.com/assets/home/lore/seq/65.webp?2
https://thisismagma.com/assets/home/lore/seq/66.webp?2
https://thisismagma.com/assets/home/lore/seq/67.webp?2
https://thisismagma.com/assets/home/lore/seq/68.webp?2
https://thisismagma.com/assets/home/lore/seq/69.webp?2
https://thisismagma.com/assets/home/lore/seq/70.webp?2
https://thisismagma.com/assets/home/lore/seq/71.webp?2
https://thisismagma.com/assets/home/lore/seq/72.webp?2
https://thisismagma.com/assets/home/lore/seq/73.webp?2
https://thisismagma.com/assets/home/lore/seq/74.webp?2
https://thisismagma.com/assets/home/lore/seq/75.webp?2
https://thisismagma.com/assets/home/lore/seq/76.webp?2
https://thisismagma.com/assets/home/lore/seq/77.webp?2
https://thisismagma.com/assets/home/lore/seq/78.webp?2
https://thisismagma.com/assets/home/lore/seq/79.webp?2
https://thisismagma.com/assets/home/lore/seq/80.webp?2
https://thisismagma.com/assets/home/lore/seq/81.webp?2
https://thisismagma.com/assets/home/lore/seq/82.webp?2
https://thisismagma.com/assets/home/lore/seq/83.webp?2
https://thisismagma.com/assets/home/lore/seq/84.webp?2
https://thisismagma.com/assets/home/lore/seq/85.webp?2
https://thisismagma.com/assets/home/lore/seq/86.webp?2
https://thisismagma.com/assets/home/lore/seq/87.webp?2
https://thisismagma.com/assets/home/lore/seq/88.webp?2
https://thisismagma.com/assets/home/lore/seq/89.webp?2
https://thisismagma.com/assets/home/lore/seq/90.webp?2
https://thisismagma.com/assets/home/lore/seq/91.webp?2
https://thisismagma.com/assets/home/lore/seq/92.webp?2
https://thisismagma.com/assets/home/lore/seq/93.webp?2
https://thisismagma.com/assets/home/lore/seq/94.webp?2
https://thisismagma.com/assets/home/lore/seq/95.webp?2
https://thisismagma.com/assets/home/lore/seq/96.webp?2
https://thisismagma.com/assets/home/lore/seq/97.webp?2
https://thisismagma.com/assets/home/lore/seq/98.webp?2
https://thisismagma.com/assets/home/lore/seq/99.webp?2
https://thisismagma.com/assets/home/lore/seq/100.webp?2
https://thisismagma.com/assets/home/lore/seq/101.webp?2
https://thisismagma.com/assets/home/lore/seq/102.webp?2
https://thisismagma.com/assets/home/lore/seq/103.webp?2
https://thisismagma.com/assets/home/lore/seq/104.webp?2
https://thisismagma.com/assets/home/lore/seq/105.webp?2
https://thisismagma.com/assets/home/lore/seq/106.webp?2
https://thisismagma.com/assets/home/lore/seq/107.webp?2
https://thisismagma.com/assets/home/lore/seq/108.webp?2
https://thisismagma.com/assets/home/lore/seq/109.webp?2
https://thisismagma.com/assets/home/lore/seq/110.webp?2
https://thisismagma.com/assets/home/lore/seq/111.webp?2
https://thisismagma.com/assets/home/lore/seq/112.webp?2
https://thisismagma.com/assets/home/lore/seq/113.webp?2
https://thisismagma.com/assets/home/lore/seq/114.webp?2
https://thisismagma.com/assets/home/lore/seq/115.webp?2
https://thisismagma.com/assets/home/lore/seq/116.webp?2
https://thisismagma.com/assets/home/lore/seq/117.webp?2
https://thisismagma.com/assets/home/lore/seq/118.webp?2
https://thisismagma.com/assets/home/lore/seq/119.webp?2
https://thisismagma.com/assets/home/lore/seq/120.webp?2
https://thisismagma.com/assets/home/lore/seq/121.webp?2
https://thisismagma.com/assets/home/lore/seq/122.webp?2
https://thisismagma.com/assets/home/lore/seq/123.webp?2
https://thisismagma.com/assets/home/lore/seq/124.webp?2
https://thisismagma.com/assets/home/lore/seq/125.webp?2
https://thisismagma.com/assets/home/lore/seq/126.webp?2
https://thisismagma.com/assets/home/lore/seq/127.webp?2
https://thisismagma.com/assets/home/lore/seq/128.webp?2
https://thisismagma.com/assets/home/lore/seq/129.webp?2
https://thisismagma.com/assets/home/lore/seq/130.webp?2
https://thisismagma.com/assets/home/lore/seq/131.webp?2
https://thisismagma.com/assets/home/lore/seq/132.webp?2
https://thisismagma.com/assets/home/lore/seq/133.webp?2
https://thisismagma.com/assets/home/lore/seq/134.webp?2
https://thisismagma.com/assets/home/lore/seq/135.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2

`;
    return data.split('\n')[index];
  }

  const frameCount = 136;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: 'frame',
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#page7`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: '#page7',
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
setupCanvasPage7();

gsap.to('#page7 > .circle', {
  scrollTrigger: {
    trigger: '#page7 > .circle',
    scroller: '#main',
    start: 'top 50%',
    end: 'bottom 0% ',
    scrub: 0.5,
    // markers: true,
  },
  scale: 1.25,
  duration: 1,
});

gsap.to('#page7 > .circle > .innerCircle ', {
  scrollTrigger: {
    trigger: '#page7 > .circle',
    scroller: '#main',
    start: 'top 50%',
    end: 'bottom 0% ',
    scrub: 0.5,
    // markers: true,
  },
  scale: 0.5,
  duration: 1,
  backgroundColor: '#145cf798',
});
