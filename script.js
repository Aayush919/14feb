// locomotive allow gsap to run
function init() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
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
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

init();


// gsap.set(".page2 .overlay .first", { display: 'none' })

gsap.set(".page2 .overlay .second", { display:'none' })
gsap.set(".page2 .overlay .third ", {display:'none'})
// animation nav contact nd psquare company opcatiy
// timeline for opactiy 0 to 1 and 1 to 0 of contact and psquare company
const navTimeline = gsap.timeline();
navTimeline.to(".nav .pc", {
  display:'none',

  scrollTrigger: {
    scrub: true,
    trigger: ".nav",
    scroller: "#main",
   start:'10% top',
   end:'top -10%',
  
  }
})
  .to(".nav .contact", {
   display:'initial',
   scrollTrigger: {
      scrub: true,
      trigger: ".nav",
      scroller: "#main",
     start:'150% top',
     end:'top top',
   
    }
  }, "-=2");

navTimeline.play();

//animation nav box shadow

gsap.to(".nav", {
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.75)",
  scrollTrigger: {
    scrub: 1,
    trigger: ".nav",
    scroller: "#main",

    start: "200vh 190vh",
    end: "900vh 100vh",
  },
});



//PIN success animation
//animation hero h2 pin true

gsap.to(".hero h2", {
  textShadow: "0px 3px 12px #00000080",
  color: "#FAF2FF",
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    pin: true,
    trigger: ".hero h2",
    scroller: "#main",
    scrub: true,
    start: "13% 53%",
    end: "-6% top",
  
  },
});

// ---------------------------HERO H1 OR P2H1----------------------------------------------------------------------------------------------------------------------


gsap.to(".hero h1", {
  textShadow: "0px 3px 12px #00000080",
  color: "#FAF2FF",
  top: "122%",
  scrollTrigger: {
    trigger: ".hero h1",
    scroller: "#main",
    scrub: true,
    start: "1% 34%",
    end: "top -207%",
    },
})


// animatiom page2 h1
var p22 = gsap.timeline()
// // THIS ONE
p22.to(".page2 .overlay .p2h1", {
  top: "28%",
  fontFamily: "'montserrat', 'sans-serif'",
  fontStyle: "normal",
  scrollTrigger: {
    trigger: ".hero h1",
    scroller: "#main",
    scrub: true,
    start: "1% 34%",
    end: "top -190%",
    markers:true,
  

  },
})
  .to(".page2 .overlay .p2h1", {
    fontWeight: 300,
    left: '10%',
    fontSize: '3.5vw',
    scrollTrigger: {
      trigger: ".hero h2",
      scroller: "#main",
      scrub: true,
      start: "320% top",
      end: "200% -80%",
    }

  })
  .to(".page2 .overlay .p2h1", {
    transform: 'translateY(6.7rem)',
    scrollTrigger: {
      trigger: ".bottom-text h2",
      scroller: "#main",
      scrub: 1,
      start: '280% top',
      end: 'top -60%',
    }

  })


  .to(".page2 .overlay .p2h1", {
    scale: '2',
    transform: "translateX(45%)",
    fontFamily: "'montserrat', 'sans-serif'",
    fontWeight: '700',
    fontStyle: 'normal',

    scrollTrigger: {

      trigger: ".bottom-text h2",
      scroller: "#main",
      scrub: 1,
      start: '620% top',
      end: 'top -120%',



    }


  })

  .to(".page2 .overlay .p2h1", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".bottom-text h2",
      scroller: "#main",
      scrub: 1,
      start: '1100% top',
      end: 'top -120%'

    }

  })

// ----------------------------------------p2h1 end------------------------------------------
// -------------------------------------------------------------------------------------------first start-------------------------------------------------------------------------

const firstt1 = gsap.timeline();

firstt1.to(".page2 .overlay .first", {
 display:'initial',
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: '1100% top',
    end: 'top -200%'

  }
})
  .to(".page2 .overlay .first", {
    // transform: "translateY(-50%)",
    scrollTrigger: {
      trigger: ".bottom-text h2",
      scroller: "#main",
      scrub: 1,
      start: '1500% top',
      end: 'top -200%'


    }
  })
  .to(".page2 .overlay .first", {
    fontWeight: 300,
    left: '10%',
    fontSize: '3.5vw',
    scrollTrigger: {
      trigger: ".bottom-text h2",
      scroller: "#main",
      scrub: 1,
      start: '1800% top',
      end: 'top -200%'


    }
  })
.to(".page2 .overlay .first", {
  top: '70%',
  // color:'red',
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "4200% top",
    end: "4200% -100%",

  }
})
.to(".page2 .overlay .first", {
  scale: '2',
  fontWeight: '700',
  transform: "translateX(54%)",
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "4800% top",
    end: "4800% -100%",
  }
})
.to(".page2 .overlay .first", {
  display: 'none',
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "5000% top",
    end: "5000% -10%",

  }
})





var p2s = gsap.timeline();

p2s.to(".page2 .overlay .second", {
 display:'initial',
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "5400% top",
    end: "5400% -500%",
  }
})
  .to(".page2 .overlay .second", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: ".page2 .overlay .second",
      scroller: "#main",
      scrub: true,
      start: "6900% top",
      end: "6900% -80%",
    }
  })
.to(".page2 .overlay .second", {
    fontWeight: 300,
    left: '10%',
    fontSize: '3.5vw',
    letterSpacing: '4px',
    scrollTrigger: {
      trigger: ".page2 .overlay .second",
      scroller: "#main",
      scrub: true,
      start: "7300% top",
      end: "7300% -80%",
    }
  })

.to(".page2 .overlay .second", {
 opacity:0,
    scrollTrigger: {
      trigger: ".page2 .overlay .second",
      scroller: "#main",
      scrub: true,
      start: "15300% top",
      end: "15300% -80%",

    }
  })
  
  .to(".page2 .overlay .third", {
   display:'initial',
    scrollTrigger: {
      trigger: ".page2 .overlay .second",
      scroller: "#main",
      scrub: true,
      start: "15000% top",
      end: "15000% -80%",


    }
  })

// -------------------------------------------------------------------------------------------------first end---------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------animation on third h1 start-------------------------------------------------------------------------------------------------------------------

var third = gsap.timeline();


third.to(".page2 .overlay .third", {
  top: '45%',
  scrollTrigger: {
    trigger: ".page2 .overlay .third",
    scroller: "#main",
    scrub: true,
    start: "15900% top",
    end: "15900% -50%",
  }
})

.to(".page2 .overlay .third", {
  left: '20%',
  scale: '1.5',
  fontWeight: '700',
  scrollTrigger: {

    trigger: ".page2 .overlay .third",
    scroller: "#main",
    scrub: true,
    start: "16200% top",
    end: "16200% -50%",

  }
})

.to(".page2 .overlay .thirdspan", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".page2 .overlay .third",
    scroller: "#main",
    scrub: true,
    start: "17300% top",
    end: "17300% -100%",

  }
})
var page2Animations = [
  { element: ".page2 .overlay .yrs1", start: '17300% top', end: '17300% -80%' },
  { element: ".page2 .overlay .yrs2", start: '17340% top', end: '17340% -80%' },
  { element: ".page2 .overlay .yrs3", start: '17380% top', end: '17380% -80%' },
  { element: ".page2 .overlay .yrs4", start: '17420% top', end: '17420% -80%' },
  { element: ".page2 .overlay .yrs5", start: '17460% top', end: '17460% -80%' },
  { element: ".page2 .overlay .yrs6", start: '17500% top', end: '17500% -80%' },
  { element: ".page2 .overlay .yrs7", start: '17540% top', end: '17540% -80%' },
  { element: ".page2 .overlay .yrs8", start: '17580% top', end: '17580% -80%' },
  { element: ".page2 .overlay .yrs9", start: '17620% top', end: '17620% -80%' },
  { element: ".page2 .overlay .yrs10", start: '17660% top', end: '17660% -80%' },
  { element: ".page2 .overlay .yrs11", start: '17720% top', end: '17720% -80%' },
  { element: ".page2 .overlay .yrs12", start: '17780% top', end: '17780% -80%' }
];

page2Animations.forEach(function(animation) {
  gsap.to(animation.element, {
    opacity: 1,
    transform: 'translateX(0vw)',
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: animation.start,
      end: animation.end
    }
  });
});
//-------------------------------------------------------------db start--------------------------------------------------------------------------------
gsap.to(".page2 .db h3 .one1", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "140% 50%",
    end: "top -20%",


  },
})

gsap.to(".page2 .db h3 .two2", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  delay: 2,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "172% 50%",
    end: "top -20%",

  },
})

gsap.to(".page2 .db h3 .three3", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "204% 50%",
    end: "top -20%",
  },
})


gsap.to(".page2 .db h3 .four4", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "236% 50%",
    end: "top -20%",
  },
})



gsap.to(".page2 .db h3 .five5", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "268% 50%",
    end: "top -20%",
  },
})

gsap.to(".page2 .db h3 .six6", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "300% 50%",
    end: "top -20%",
  },
})



gsap.to(".page2 .db h3 .seven7", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "332% 50%",
    end: "top -20%",
  },
})


gsap.to(".page2 .db h3 .eight8", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "364% 50%",
    end: "top -20%",
  },
})



gsap.to(".page2 .db h3 .nine9", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "396% 50%",
    end: "top -20%",
  },
})



gsap.to(".page2 .db h3 .ten10", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "428% 50%",
    end: "top -20%",
  },
})


gsap.to(".page2 .db h3 .eleven11", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "460% 50%",
    end: "top -20%",
  },
})



gsap.to(".page2 .db h3 .tw12", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "492% 50%",
    end: "top -20%",
  },
})
// ---------------------------------------------animation db end---------------------------------------------------------------------------------------------------------------





// ----------------------------------------------------------------------------------------------------------------------bottom text start---------------------------------------------------------------------
gsap.to(".bottom-text h2 .one", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "top 28%",
    end: "top -20%",



  },
})


gsap.to(".bottom-text h2 .two", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "20% 28%",
    end: "top -20%",

  },
})


gsap.to(".bottom-text h2 .three", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "40% 28%",
    end: "top -20%",



  },
})



gsap.to(".bottom-text h2 .four", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "60% 28%",
    end: "top -20%",

  },
})


gsap.to(".bottom-text h2 .five", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "80% 28%",
    end: "top -20%",


  },
})


gsap.to(".bottom-text h2 .six", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "100% 28%",
    end: "top -20%",


  },
})

gsap.to(".bottom-text h2 .seven", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "120% 28%",
    end: "top -20%",

  },
})

gsap.to(".bottom-text h2 .eight", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "140% 28%",
    end: "top -20%",


  },
})


gsap.to(".bottom-text h2 .nine", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "160% 28%",
    end: "top -20%",
  },
})


gsap.to(".bottom-text h2 .ten", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "180% 28%",
    end: "top -20%",

  },
})


gsap.to(".bottom-text h2 .eleven", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "200% 28%",
    end: "top -20%",

  },
})

//--------------------------------------------------------------------------------------------------------------------------bottom text end---------------------------------------------------------------------------------------------------------------------------------




//------------------------------------------------------------------------------------------------------------------------move to top  botto-text animation----------------------------------------------------------------

const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: '280% top',
    end: 'top -50%',




  },
});

t3.to(".bottom-text h2", {
  opacity: 0,
  top: '20%'
})



const t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".db h3",
    scroller: "#main",
    scrub: 1,
    start: '190% top',
    end: 'top -35%',




  },
});

t4.to(".db h3", {
  opacity: 0,
  duration: 12,
  top: '30%',
})

// --------------------------------------end move to top--------------------------------------------------












// ----------overlay pin true--------------------------------------------------------------------------
gsap.to(".overlay", {
  scrollTrigger: {
    trigger: ".overlay",
    scroller: "#main",
    scrub: true,
    start: "1vh 1vh",
    end: "3000vh -800000vh",
    pin: true,
  },
});
// ------------------------end overlay pin true-----------------------------------------------------


// ---------------------------------------------th animation start-------------------------------------


var th = gsap.timeline();

var th = gsap.timeline();

var animations = [
  { element: ".th h5 .thone", start: '1300% top', end: '1300% -50%' },
  { element: ".th h5 .thtwo", start: '1350% top', end: '1350% -50%' },
  { element: ".th h5 .ththree", start: '1400% top', end: '1400% -50%' },
  { element: ".th h5 .thfour", start: '1450% top', end: '1450% -50%' },
  { element: ".th h5 .thfive", start: '1500% top', end: '1500% -50%' },
  { element: ".th h5 .thsix", start: '1550% top', end: '1550% -50%' },
  { element: ".th h5 .thseven", start: '1600% top', end: '1600% -50%' }
];

animations.forEach(animation => {
  th.to(animation.element, {
    transform: "translateX(0)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".th h5",
      scroller: "#main",
      scrub: true,
      start: animation.start,
      end: animation.end
    }
  });
});




var th1 = gsap.timeline();

th1.to(".th h5", {
  top: '24%',
  scale: 0.4,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: '1800% top',
    end: '1800% -50%',
    preventOverlaps: true
  },
  onComplete: function () {
    gsap.to(".th h5", {
      top: '19%',
      scrollTrigger: {
        trigger: ".th h5",
        scroller: "#main",
        scrub: true,
        start: '100% top',
        end: '100% -400%'
      }
    });
  }
})
gsap.to(".th h5", {
  transform: "translate(73%,-50%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "4200% top",
    end: "4200% -50%",
  }
})







// ------------------------------------------------th animation end--------------------------------------



// -----------------------------------------------------------etu anumatuon start--------------------------
var etu = gsap.timeline();

var animations = [
  { element: ".etu h5 .etuone", start: '1750% top', end: '1750% -50%' },
  { element: ".etu h5 .etutwo", start: '1780% top', end: '1780% -50%' },
  { element: ".etu h5 .etuthree", start: '1810% top', end: '1810% -50%' },
  { element: ".etu h5 .etufour", start: '1840% top', end: '1840% -50%' },
  { element: ".etu h5 .etufive", start: '1870% top', end: '1870% -50%' },
  { element: ".etu h5 .etusix", start: '1900% top', end: '1900% -50%' },
  { element: ".etu h5 .etuseven", start: '1930% top', end: '1930% -50%' },
  { element: ".etu h5 .etueight", start: '1960% top', end: '1960% -50%' },
  { element: ".etu h5 .etunine", start: '1990% top', end: '1990% -50%' }
];

animations.forEach(animation => {
  etu.to(animation.element, {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".etu h5",
      scroller: "#main",
      scrub: 1,
      start: animation.start,
      end: animation.end
    }
  });
});





var etu1 = gsap.timeline();
etu1.to(".etu h5", {
  top: '33%',
  scale: 0.4,
  transform: 'translateX(30%)',
  fontWeight: '300',
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".etu h5",
    scroller: "#main",
    scrub: true,
    start: '2250% top',
    end: '2250% -50%',
    preventOverlaps: true,
  },
  onComplete: function () {
    gsap.to(".etu h5", {
      top: '27%',
      ease: "sine.out",
      scrollTrigger: {
        trigger: ".etu h5",
        scroller: "#main",
        scrub: true,
        start: '100% top',
        end: '100% -500%'
      }


    });
  }
})


gsap.to(".etu h5", {
  transform: "translate(52%,-100%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "4200% top",
    end: "4200% -70%",
  }
})


// -------------------------------bsp start animation-------------------------------------------------------------------------------

var bsp = gsap.timeline();

var bspAnimations = [
  { element: ".bsp h5 .bspone", start: '2240% top', end: '2240% -50%' },
  { element: ".bsp h5 .bsptwo", start: '2280% top', end: '2280% -50%' },
  { element: ".bsp h5 .bspthree", start: '2310% top', end: '2310% -50%' },
  { element: ".bsp h5 .bspfour", start: '2340% top', end: '2340% -50%' },
  { element: ".bsp h5 .bspfive", start: '2370% top', end: '2370% -50%' },
  { element: ".bsp h5 .bspsix", start: '2400% top', end: '2400% -50%' },
  { element: ".bsp h5 .bspseven", start: '2430% top', end: '2430% -50%' }
];

bspAnimations.forEach(animation => {
  bsp.to(animation.element, {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bsp h5",
      scroller: "#main",
      scrub: 1,
      start: animation.start,
      end: animation.end
    }
  });
});

bsp.to(".bsp h5", {
  top: '44%',
  scale: 0.6,
  fontWeight: 600,
  transform: 'translateX(60%)',
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bsp h5",
    scroller: "#main",
    scrub: true,
    start: '2700% top',
    end: '2700% -50%',
    preventOverlaps: true
  },
    onComplete: function () {
      gsap.to('.bsp h5', {
        top: '36%',
        ease: "sine.out",
        scrollTrigger: {
          trigger: ".bsp h5",
          scroller: "#main",
          scrub: true,
          start: '100% top',
          end: '100% -500%'
        }
      })
    }
});


gsap.to(".bsp h5", {
  transform: "translate(84%,-150%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "4200% top",
    end: "4200% -110%",
  }
})

// ----------------------------------------------------bsp animation end-----------------------------------------------------------------------------

//-----------------------------------------elf animation start------------------------------------------------------------------


var elf = gsap.timeline();

var elfAnimations = [
  { element: ".elf h5 .elf1", start: '3650% top', end: '3650% -50%' },
  { element: ".elf h5 .elf2", start: '2980% top', end: '2980% -50%' },
  { element: ".elf h5 .elf3", start: '3010% top', end: '3010% -50%' },
  { element: ".elf h5 .elf4", start: '3040% top', end: '3040% -50%' },
  { element: ".elf h5 .elf5", start: '3070% top', end: '3070% -50%' },
  { element: ".elf h5 .elf6", start: '3100% top', end: '3100% -50%' },
  { element: ".elf h5 .elf7", start: '3130% top', end: '3130% -50%' },
  { element: ".elf h5 .elf8", start: '3160% top', end: '3160% -50%' },
  { element: ".elf h5 .elf9", start: '3190% top', end: '3190% -50%' },
  { element: ".elf h5 .elf10", start: '3220% top', end: '3220% -50%' },
  { element: ".elf h5 .elf11", start: '3250% top', end: '3250% -50%' },
  { element: ".elf h5 .elf12", start: '3280% top', end: '3280% -50%' },
  { element: ".elf h5 .elf13", start: '3310% top', end: '3310% -50%' },
  { element: ".elf h5 .elf14", start: '3340% top', end: '3340% -50%' },
  { element: ".elf h5 .elf15", start: '3370% top', end: '3370% -50%' },
  { element: ".elf h5 .elf16", start: '3400% top', end: '3400% -50%' }
];

elfAnimations.forEach(animation => {
  elf.to(animation.element, {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: animation.start,
      end: animation.end
    }
  });
});

elf.to(".elf h5", {
  top: '48%',
  scale: 0.6,
  duration: 10,
  fontWeight: 400,
  scrollTrigger: {
    trigger: ".elf h5",
    scroller: "#main",
    scrub: true,
    start: '3720% top',
    end: '3720% -50%',
  
  },
onComplete: function () {
  gsap.to('.elf h5', {
    top: '46%',
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: true,
      start: '100% top',
      end: '100% -100%',
    }
  })
}
});

gsap.to(".elf h5", {
  transform: "translate(34%,-220%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "4200% top",
    end: "4200% -130%",
  }
});

// -----------------------------------------------------bns animation start-------------------------------------------------------------------------
var bns = gsap.timeline();
var bnsAnimations = [
  { element: ".bns h5 .bns1", start: '3700% top', end: '3700% -50%' },
  { element: ".bns h5 .bns2", start: '3730% top', end: '3730% -50%' },
  { element: ".bns h5 .bns3", start: '3760% top', end: '3760% -50%' },
  { element: ".bns h5 .bns4", start: '3790% top', end: '3790% -50%' },
  { element: ".bns h5 .bns5", start: '3820% top', end: '3820% -50%' },
  { element: ".bns h5 .bns6", start: '3850% top', end: '3850% -50%' },
  { element: ".bns h5 .bns7", start: '3880% top', end: '3880% -50%' },
  { element: ".bns h5 .bns8", start: '3910% top', end: '3910% -50%' },
  { element: ".bns h5 .bns9", start: '3940% top', end: '3940% -50%' }
];


bnsAnimations.forEach(animation => {
  bns.to(animation.element, {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bns h5",
      scroller: "#main",
      scrub: 1,
      start: animation.start,
      end: animation.end
    }
  });
});

bns.to(".bns h5", {
  top: '60%',
  scale: '0.9',
  transform: "translateX(108%)",
  scrollTrigger: {
    trigger: ".bns h5",
    scroller: "#main",
    scrub: 1,
    start: '4200% top',
    end: '4200% -50%'
  }
});

gsap.to(".bns h5", {
  transform: "translate(106%,-300%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "4200% top",
    end: "4200% -200%",
  }
});

// ------------------------------------bns animation end------------------------------------------------------------------------------------------------------------


var swAnimations = [
  { element: ".sw h5 .sw1", start: '3630% top', end: '3630% -50%' },
  { element: ".sw h5 .sw2", start: '3660% top', end: '3660% -50%' },
  { element: ".sw h5 .sw3", start: '3690% top', end: '3690% -50%' },
  { element: ".sw h5 .sw4", start: '3720% top', end: '3720% -50%' },
  { element: ".sw h5 .sw5", start: '3750% top', end: '3750% -50%' },
  { element: ".sw h5 .sw6", start: '3780% top', end: '3780% -50%' },
  { element: ".sw h5 .sw7", start: '3810% top', end: '3810% -50%' },
  { element: ".sw h5 .sw8", start: '3840% top', end: '3840% -50%' },
  { element: ".sw h5 .sw9", start: '3870% top', end: '3870% -50%' }
];


var sw = gsap.timeline();

swAnimations.forEach(animation => {
  sw.to(animation.element, {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".sw h5",
      scroller: "#main",
      scrub: 1,
      start: animation.start,
      end: animation.end,
    }
  });
});



bns.to(".sw h5", {
  top: '71%',
  scale: '0.9',
  transform: "translateX(85%)",
  scrollTrigger: {
    trigger: ".sw h5",
    scroller: "#main",
    scrub: 1,
    start: '4200% top',
    end: '4200% -50%'
  }
});

gsap.to(".sw h5", {
  transform: "translate(81%,-380%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "4200% top",
    end: "4200% -270%",
  }
});



// -----------------------------------------------cm animation start------------------------------------------------------------------------------------
var cmAnimations = [
  { element: ".cm h5 .cm1", start: '7400% top', end: '7400% -80%' },
  { element: ".cm h5 .cm2", start: '7440% top', end: '7440% -80%' },
  { element: ".cm h5 .cm3", start: '7480% top', end: '7480% -80%' },
  { element: ".cm h5 .cm4", start: '7520% top', end: '7520% -80%' },
  { element: ".cm h5 .cm5", start: '7560% top', end: '7560% -80%' },
  { element: ".cm h5 .cm6", start: '7600% top', end: '7600% -80%' },
  { element: ".cm h5 .cm7", start: '7640% top', end: '7640% -80%' },
  { element: ".cm h5 .cm8", start: '7680% top', end: '7680% -80%' },
  { element: ".cm h5 .cm9", start: '7720% top', end: '7720% -80%' },
  { element: ".cm h5 .cm10", start: '7760% top', end: '7760% -80%' },
  { element: ".cm h5 .cm11", start: '7800% top', end: '7800% -80%' },
  { element: ".cm h5 .cm12", start: '7840% top', end: '7840% -80%' },
  { element: ".cm h5 .cm13", start: '7880% top', end: '7880% -80%' }
];

var cm = gsap.timeline();

cmAnimations.forEach(function (animation) {
  cm.to(animation.element, {
    transform: "translateX(0vw)",
    opacity: 1,
    scrollTrigger: {
      trigger: ".cm h5",
      scroller: "#main",
      scrub: true,
      start: animation.start,
      end: animation.end,
    },
  });
});

cm.to(".cm h5", {
  top: '27%',
  scale: '0.5',
  scrollTrigger: {
    trigger: ".cm h5",
    scroller: "#main",
    scrub: true,
    start: "8280% top",
    end: "8280% -80%",
  },
})


.to(".cm h5", {
  transform: "translate(40%,-60%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".cm h5",
    scroller: "#main",
    scrub: true,
    start: "8980% top",
    end: "8980% -80%",
  },
});




// ------------------------------------cmp animation----------------------------------
var cmp = gsap.timeline()
cmp.to(".cm p", {
  top: '50%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".cm h5",
    scroller: "#main",
    scrub: true,
    start: "8280% top",
    end: "8280% -80%",

  },
})
  .to(".cm .cmp", {

    opacity: 0,
    scrollTrigger: {
      trigger: ".cm h5",
      scroller: "#main",
      scrub: true,
      start: "8980% top",
      end: "8980% -80%",

    },
  })


//-------------------------------.inp animation start------------------------
var inp = gsap.timeline()

inp.to(".in h5", {
  top: '25%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".in h5",
    scroller: "#main",
    scrub: true,
    start: "18950% top",
    end: "18950% -80%",

  },
}).to(".in p", {
  top: '38%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".in h5",
    scroller: "#main",
    scrub: true,
    start: "18950% top",
    end: "18950% -80%",

  },
}).to(".in h5", {
  transform: "translate(0%,-50%)",
  scrollTrigger: {
    trigger: ".in h5",
    scroller: "#main",
    scrub: true,
    start: "20900% top",
    end: "20900% -80%",

  },
}).to(".in .inh", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".in h5",
    scroller: "#main",
    scrub: true,
    start: "20900% top",
    end: "20900% -80%",
  },
}).to(".in .inp", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".in h5",
    scroller: "#main",
    scrub: true,
    start: "20900% top",
    end: "20900% -80%",

  },
})


//----------------------------------------------------------------------------------------------animation sc start---------------------------------------------------------------var inp=gsap.timeline()
var scp = gsap.timeline();
scp.to(".sc h5", {
  top: '25%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".sc h5",
    scroller: "#main",
    scrub: true,
    start: "20900% top",
    end: "20900% -80%",

  },
})
  .to(".sc p", {
    top: '38%',
    opacity: 1,
    scrollTrigger: {
      trigger: ".sc h5",
      scroller: "#main",
      scrub: true,
      start: "20900% top",
      end: "20900% -80%",

    },
  })

  .to(".sc h5", {
    transform: "translate(1%,-60%)",

    scrollTrigger: {
      trigger: ".sc h5",
      scroller: "#main",
      scrub: true,
      start: "22900% top",
      end: "22900% -80%",

    },
  })
  .to(".sc .sch", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".sc h5",
      scroller: "#main",
      scrub: true,
      start: "22900% top",
      end: "22900% -80%",

    },
  })
  .to(".sc .scp", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".in h5",
      scroller: "#main",
      scrub: true,
      start: "22900% top",
      end: "22900% -80%",

    },
  })


//  -------------------------ing animation start--------------------------------------------------------------------------------------------------------------------


var ing = gsap.timeline();
ing.to(".ing h5", {
  top: '25%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".ing h5",
    scroller: "#main",
    scrub: true,
    start: "22900% top",
    end: "22900% -80%",

  },
})
  .to(".ing p", {
    top: '38%',
    opacity: 1,
    scrollTrigger: {
      trigger: ".ing h5",
      scroller: "#main",
      scrub: true,
      start: "22900% top",
      end: "22900% -80%",


    },
  })
  .to(".ing h5", {
    transform: "translate(0%,-100%)",
    scrollTrigger: {
      trigger: ".ing h5",
      scroller: "#main",
      scrub: true,
      start: "24900% top",
      end: "24900% -80%",

    },
  })
  .to(".ing .ingh", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".ing h5",
      scroller: "#main",
      scrub: true,
      start: "24900% top",
      end: "24900% -80%",

    },
  })
  .to(".ing .ingp", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".ing h5",
      scroller: "#main",
      scrub: true,
      start: "24900% top",
      end: "24900% -80%",

    },
  })

//  ---------------------------------------------------------------------------imp animation start -----------------------------------------------------



var imp = gsap.timeline();
imp.to(".imp h5", {
  top: '26%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".imp h5",
    scroller: "#main",
    scrub: true,
    start: "24900% top",
    end: "24900% -80%",

  },
})
  .to(".imp p", {
    top: '38%',
    opacity: 1,
    scrollTrigger: {
      trigger: ".imp h5",
      scroller: "#main",
      scrub: true,
      start: "24900% top",
      end: "24900% -80%",


    },
  })
  .to(".imp h5", {
    transform: "translate(1%,-100%)",

    scrollTrigger: {
      trigger: ".imp h5",
      scroller: "#main",
      scrub: true,
      start: "26900% top",
      end: "26900% -80%",

    },
  })
  .to(".imp .imph", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".imp h5",
      scroller: "#main",
      scrub: true,
      start: "26900% top",
      end: "26900% -80%",

    },
  })
  .to(".imp .impp", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".imp h5",
      scroller: "#main",
      scrub: true,
      start: "26900% top",
      end: "26900% -80%",

    },
  })

//------------------------------------------------------------------------------------------------tr animation start-------------------------------------------------------- 

var trp = gsap.timeline();

trp.to(".tr h5", {
  top: '25%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".tr h5",
    scroller: "#main",
    scrub: true,
    start: "26900% top",
    end: "26900% -80%",


  },
})
  .to(".tr p", {
    top: '38%',
    opacity: 1,
    scrollTrigger: {
      trigger: ".tr h5",
      scroller: "#main",
      scrub: true,
      start: "26900% top",
      end: "26900% -80%",



    },
  })
  .to(".tr h5", {
    transform: "translate(1%,-100%)",

    scrollTrigger: {
      trigger: ".tr h5",
      scroller: "#main",
      scrub: true,
      start: "28900% top",
      end: "28900% -80%",


    },
  })
  .to(".tr .trh", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".tr h5",
      scroller: "#main",
      scrub: true,
      start: "28900% top",
      end: "28900% -80%",

    },
  })
  .to(".tr .trp", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".tr h5",
      scroller: "#main",
      scrub: true,
      start: "28900% top",
      end: "28900% -80%",

    },
  })
  .to(".page2 .overlay2 ", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "17900% top",
      end: "17900% -80%",
  
    }
  })

  .to(".page2 .overlay .third", {
    // opacity: 1,
    transform: 'translate(0,-200%)',
    color: '#fff',

    // background: "transparent linear-gradient(197deg, #ECE7E100 0%, #82638F57 35%, #330152 100%) 0% 0% no-repeat padding-box",
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "17900% top",
      end: "17900% -80%",

    }
  })
  .to(".page2 .overlay .yrs", {
    // opacity: 1,
    top: '17%',
    color: '#fff',

    // background: "transparent linear-gradient(197deg, #ECE7E100 0%, #82638F57 35%, #330152 100%) 0% 0% no-repeat padding-box",
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "17900% top",
      end: "17900% -80%",

    }
  })
.to(".frm .frmr", {
  opacity: 1,
  transform: 'translateY(0%)',
  scrollTrigger: {
    trigger: ".tr h5",
    scroller: "#main",
    scrub: true,
    start: "33900% top",
    end: "33900% -80%",


  },
})


.to(".frm .frml", {
  opacity: 1,
  transform: 'translateY(0%)',
  scrollTrigger: {
  
    trigger: ".tr h5",
    scroller: "#main",
    scrub: true,
    start: "33900% top",
    end: "33900% -80%",
  },
})

.to(".p3btm", {
  opacity: 1,
  bottom: '0',
  scrollTrigger: {
    trigger: ".tr h5",
    scroller: "#main",
    scrub: true,
    start: "33900% top",
    end: "33900% -80%",

  },
})