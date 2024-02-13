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


gsap.set(".page2 .overlay .first", { opacity: 0 })
//animation nav contact nd psquare company opcatiy
// timeline for opactiy 0 to 1 and 1 to 0 of contact and psquare company
// const navTimeline = gsap.timeline();
// navTimeline.to(".nav .pc", {
//   opacity: 0,
//   duration: 2,
//   scrollTrigger: {
//     scrub: 2,
//     trigger: ".nav",
//     scroller: "#main",
//     start: "400vh 40vh",
//     markers:true,
//     end: "59% top"
//   }
// })
//   .to(".nav .contact", {
//     opacity: 1,
//     duration: 2,
//     scrollTrigger: {
//       scrub: 3,
//       trigger: ".nav",
//       scroller: "#main",
//       start: "400% 40%",
//       end: "70% top"
//     }
//   }, "-=2");

// navTimeline.play();

//animation nav box shadow

gsap.to(".nav", {
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.75)",
  scrollTrigger: {
    scrub: 1,
    trigger: ".nav",
    scroller: "#main",
    start: "200vh 190vh",
    end: "300vh 100vh",
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
    start: "13% 42%",
    end: "-6% top",
  },
});



// animatiom page2 h1
var p22 = gsap.timeline()
p22.to(".page2 .overlay .p2h1", {
  top: "25%",
  fontFamily: "'montserrat', 'sans-serif'",
  fontStyle: "normal",
  scrollTrigger: {
    trigger: ".page2 .overlay .p2h1",
    scroller: "#main",
    scrub: true,
    start: "top 65%",
    end: "300% 11%",

  },
})
  .to(".page2 .overlay .p2h1", {
    fontWeight: 300,
    left: '15%',
    fontSize: '3.5vw',
    scrollTrigger: {
      trigger: ".page2 .overlay .p2h1",
      scroller: "#main",
      scrub: true,
      start: "160% 20%",
      end: "470% 22%",


    }

  })
  .to(".page2 .overlay .p2h1", {
    transform: 'translateY(170%)',
    scrollTrigger: {
      trigger: ".page2 .overlay .p2h1",
      scroller: "#main",
      scrub: true,
      start: '440% -100%',
      end: '640% -320%',
    }

  })
  .to(".page2 .overlay .p2h1", {
    scale: '2',
    // translateX: '100%', 
    transform: "translateX(48%)",
    fontFamily: "'montserrat', 'sans-serif'",
    fontWeight: '700',
    fontStyle: 'normal',

    scrollTrigger: {
      trigger: ".page2 .overlay .p2h1",
      scroller: "#main",
      scrub: true,
      start: '440% -400%',
      end: '640% -1000%',
      markers: true,



    }


  })

  .to(".page2 .overlay .p2h1", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".page2 .overlay .p2h1",
      scroller: "#main",
      scrub: true,
      // start: ()=>"4300% 5%",
      // end: "4300% -300%",
      start: '7200% 70%',
      end: '7200% -300%',



    }

  })


const firstt1 = gsap.timeline();

firstt1.to(".page2 .overlay .first", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".page2 .overlay .p2h1",
    scroller: "#main",
    scrub: true,
    start: '7500% 70%',
    end: '7500% -300%',

  }
})
 .to(".page2 .overlay .first", {
  transform: "translateY(-174%)",
    scrollTrigger: {
      trigger: ".page2 .overlay .p2h1",
      scroller: "#main",
      scrub: true,
      start: '9000% top',
      end: '9000% -300%',


    }
  })
  .to(".page2 .overlay .first", {
    fontWeight: 300,
    left: '10%',
    fontSize: '3.5vw',
    scrollTrigger: {
      trigger: ".page2 .overlay .first",
      scroller: "#main",
      scrub: true,
      start: "10300% top",
      end: "10300% -300%",
    }
  })
  .to(".page2 .overlay .first", {
    top: '48%',
      scrollTrigger: {
      trigger: ".page2 .overlay .first",
      scroller: "#main",
      scrub: true,
      start: "19200% top",
      end: "19200% -400%",
    }
  })
  .to(".page2 .overlay .first", {
    top:'80%',
      scrollTrigger: {
      trigger: ".page2 .overlay .first",
      scroller: "#main",
      scrub: true,
      start: "36000% top",
      end: "36000% -1000%",
    }
  })



//animation page2 or hero page h1
// const s = gsap.timeline();

gsap.to(".hero h1", {
  textShadow: "0px 3px 12px #00000080",
  color: "#FAF2FF",
  top: "122%",
  scrollTrigger: {
    trigger: ".hero h1",
    scroller: "#main",
    scrub: true,
    start: "1% 28%",
    end: "top -210%",

  },
})



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
    start: "140% top",
    end: "top -120%",

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
    start: "172% top",
    end: "top -120%",
    // markers:true,
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
    start: "204% top",
    end: "top -120%",
    // markers:true,
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
    start: "236% top",
    end: "top -120%",
    // markers:true,
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
    start: "268% top",
    end: "top -120%",
    // markers:true,
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
    start: "300% top",
    end: "top -120%",
    // markers:true,
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
    start: "332% top",
    end: "top -120%",
    // markers:true,
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
    start: "364% top",
    end: "top -120%",
    // markers:true,
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
    start: "396% top",
    end: "top -120%",
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
    start: "428% top",
    end: "top -120%",
    // markers:true,
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
    start: "460% top",
    end: "top -120%",
    // markers:true,
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
    start: "492% top",
    end: "top -120%",
    // markers:true,
  },
})
// ---------------------------------------------animation db end-------------------------------------------------------





// ---------------------------------------------bottom text start--------------------------------------------------------
gsap.to(".bottom-text h2 .one", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "18% top",
    end: "top -118%",


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
    start: "50% top",
    end: "top -118%",

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
    start: "82% top",
    end: "top -118%",


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
    start: "114% top",
    end: "top -118%",
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
    start: "146% top",
    end: "top -118%",

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
    start: "178% top",
    end: "top -118%",

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
    start: "210% top",
    end: "top -118%",
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
    start: "242% top",
    end: "top -118%",

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
    start: "274% top",
    end: "top -118%",
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
    start: "306% top",
    end: "top -118%",

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
    start: "338% top",
    end: "top -118%",

  },
})

//----------------------------------------------------------bottom text end----------------------------




//---------------------------move to top----------------------------------------------------------------

const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: '950% top',
    end: 'top -300%',



  },
});

t3.to(".bottom-text h2", {
  opacity: 0,
  duration: 12,
  top: '20%'
})



const t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".db h3",
    scroller: "#main",
    scrub: 1,
    start: '840% top',
    end: 'top -280%',



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
    end: "3000vh -70000vh",
    pin: true,
  },
});
// ------------------------end overlay pin true-----------------------------------------------------


// ---------------------------------------------th animation start-------------------------------------


// var th = gsap.timeline();

var th = gsap.timeline();

var animations = [
  { element: ".th h5 .thone", start: '10000% top', end: '10000% -400%' },
  { element: ".th h5 .thtwo", start: '10100% top', end: '10100% -400%' },
  { element: ".th h5 .ththree", start: '10200% top', end: '10200% -400%' },
  { element: ".th h5 .thfour", start: '10300% top', end: '10300% -400%' },
  { element: ".th h5 .thfive", start: '10400% top', end: '10400% -400%' },
  { element: ".th h5 .thsix", start: '10500% top', end: '10500% -400%' },
  { element: ".th h5 .thseven", start: '10600% top', end: '10600% -400%' }
];

animations.forEach(animation => {
  th.to(animation.element, {
    transform: "translateX(0)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".th h5",
      scroller: "#main",
      scrub: 1,
      start: animation.start,
      end: animation.end
    }
  });
});




var th1 = gsap.timeline();

th1.to(".th h5", {
  top: '22%',
  // transform: "translateY(-10%)",
  scale: 0.5,
  // duration: 10,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: 1,
    start: '12800% top',
    end: '12000% -500%',
    preventOverlaps: true
  },
  onComplete: function () {
    console.log('hello');
    gsap.to(".th h5", {
      top: '19%',
      scrollTrigger: {
        trigger: ".th h5",
        scroller: "#main",
        scrub: 1,
        start: '100% top',
        end: '100% -400%'
      }
    });
  }
})






// ------------------------------------------------th animation end--------------------------------------



//-----------------------------------------------------------etu anumatuon start--------------------------
var etu = gsap.timeline();
etu.to(".etu h5 .etuone", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  scrollTrigger: {
    trigger: ".etu h5",
    scroller: "#main",
    scrub: 1,
    start: '13000% top',
    end: '13000% -500%',

  }
})
  .to(".etu h5 .etutwo", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".etu h5",
      scroller: "#main",
      scrub: 1,
      start: '13100% top',
      end: '13100% -500%',

    }
  }).to(".etu h5 .etuthree", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".etu h5",
      scroller: "#main",
      scrub: 1,
      start: '13200% top',
      end: '13200% -500%',

    }
  })
  .to(".etu h5 .etufour", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".etu h5",
      scroller: "#main",
      scrub: 1,
      start: '13300% top',
      end: '13300% -500%',

    }
  }).to(".etu h5 .etufive", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".etu h5",
      scroller: "#main",
      scrub: 1,
      start: '13400% top',
      end: '13400% -500%',

    }
  }).to(".etu h5 .etusix", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".etu h5",
      scroller: "#main",
      scrub: 1,
      start: '13500% top',
      end: '13500% -500%',

    }
  }).to(".etu h5 .etuseven", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".etu h5",
      scroller: "#main",
      scrub: 1,
      start: '13600% top',
      end: '13600% -500%',

    }
  }).to(".etu h5 .etueight", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".etu h5",
      scroller: "#main",
      scrub: 1,
      start: '13700% top',
      end: '13700% -500%',

    }
  })
  .to(".etu h5 .etunine", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".etu h5",
      scroller: "#main",
      scrub: 1,
      start: '13800% top',
      end: '13800% -500%',

    }
  })
// .to(".etu h5", {
//  y:-147,
// fontWeight: '500',
// scale:0.3,

//   scrollTrigger: {
//     trigger: ".etu h5",
//     scroller: "#main",
//     scrub: 1,
//    start:'16500% top',
//    end:'16500% -500%',


//   }
// })


var etu1 = gsap.timeline();
etu1.to(".etu h5", {
  top: '30%',
  scale: 0.5,
  fontWeight: '500',
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".etu h5",
    scroller: "#main",
    scrub: 1,
    start: '16500% top',
    end: '16200% -200%',
    preventOverlaps: true,
  },
  onComplete: function () {
    gsap.to(".etu h5", {
      top: '27%',
      ease: "sine.out",
      scrollTrigger: {
        trigger: ".etu h5",
        scroller: "#main",
        scrub: 1,
        start: '100% top',
        end: '100% -500%'
      }


    });
  }
})


// -------------------------------bsp start animation-------------------------------------------------------------------------------

var bsp = gsap.timeline();

bsp.to(".bsp h5 .bspone", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  scrollTrigger: {
    trigger: ".bsp h5",
    scroller: "#main",
    scrub: 1,
    start: '16600% top',
    end: '16600% -500%',


  }
}).to(".bsp h5 .bsptwo", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  scrollTrigger: {
    trigger: ".bsp h5",
    scroller: "#main",
    scrub: 1,
    start: '16700% top',
    end: '16700% -500%',

  }
})
  .to(".bsp h5 .bspthree", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bsp h5",
      scroller: "#main",
      scrub: 1,
      start: '16800% top',
      end: '16800% -500%',


    }
  }).to(".bsp h5 .bspfour", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bsp h5",
      scroller: "#main",
      scrub: 1,
      start: '16900% top',
      end: '16900% -500%',


    }
  }).to(".bsp h5 .bspfive", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bsp h5",
      scroller: "#main",
      scrub: 1,
      start: '17000% top',
      end: '17000% -500%',


    }
  })
  .to(".bsp h5 .bspsix", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bsp h5",
      scroller: "#main",
      scrub: 1,
      start: '17100% top',
      end: '17100% -500%',


    }
  }).to(".bsp h5 .bspseven", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bsp h5",
      scroller: "#main",
      scrub: 1,
      start: '17200% top',
      end: '17200% -500%',

    }
  }).to(".bsp h5", {
    top: '38%',
    scale: 0.6,
    duration: 10,
    fontWeight: 600,
    ease: "sine.out",
    scrollTrigger: {
      trigger: ".bsp h5",
      scroller: "#main",
      scrub: 1,
      start: '19500% top',
      end: '19500% -500%',
      preventOverlaps: true,

    },
    onComplete: function () {
      gsap.to('.bsp h5', {
        top: '36%',
        ease: "sine.out",
        scrollTrigger: {
          trigger: ".bsp h5",
          scroller: "#main",
          scrub: 1,
          start: '100% top',
          end: '100% -500%',
        }
      })
    }
  })

// ----------------------------------------------------bsp animation end-----------------------------------------------------------------------------

//-----------------------------------------elf animation start------------------------------------------------------------------


var elf = gsap.timeline();

elf.to(".elf h5 .elf1", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  scrollTrigger: {
    trigger: ".elf h5",
    scroller: "#main",
    scrub: 1,
    start: '22800% top',
    end: '22800% -400%',


  }
})
  .to(".elf h5 .elf2", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '23000% top',
      end: '23000% -400%',


    }
  }).to(".elf h5 .elf3", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '23200% top',
      end: '23200% -400%',


    }
  })
  .to(".elf h5 .elf4", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '23400% top',
      end: '23400% -400%',


    }
  }).to(".elf h5 .elf5", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '23600% top',
      end: '23600% -400%',


    }
  }).to(".elf h5 .elf6", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '23800% top',
      end: '23800% -400%',


    }
  }).to(".elf h5 .elf7", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '24000% top',
      end: '24000% -400%',


    }
  })
  .to(".elf h5 .elf8", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '24200% top',
      end: '24200% -400%',


    }
  }).to(".elf h5 .elf9", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '24450% top',
      end: '24450% -400%',


    }
  }).to(".elf h5 .elf10", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '24700% top',
      end: '24700% -400%',


    }
  }).to(".elf h5 .elf11", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '24800% top',
      end: '24800% -400%',


    }
  })
  .to(".elf h5 .elf12", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '24950% top',
      end: '24950% -400%',


    }
  })
  .to(".elf h5 .elf13", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '25100% top',
      end: '25100% -400%',


    }
  })
  .to(".elf h5 .elf14", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '25300% top',
      end: '25300% -400%',

    }
  })
  .to(".elf h5 .elf15", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '25900% top',
      end: '25900% -400%',


    }
  })
  .to(".elf h5 .elf16", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '26000% top',
      end: '26000% -400%',


    }
   
  }).to(".elf h5", { 
    top: '48%',
    scale: 0.6,
    duration: 10,
    fontWeight: 400,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: '29000% top',
      end: '28200% -400%',
      preventOverlaps:true
    },
    onComplete: function () {
      gsap.to('.elf h5', {
        top: '46%',
        scrollTrigger: {
          trigger: ".elf h5",
          scroller: "#main",
          scrub: 1,
          start: '100% top',
          end: '100% -100%',
        }
      })
    }

  })
// -----------------------------------------------------bns animation start-------------------------------------------------------------------------

var bns = gsap.timeline();
bns.to(".bns h5 .bns1", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  scrollTrigger: {
    trigger: ".bns h5",
    scroller: "#main",
    scrub: 1,
    start: '29500% top',
    end: '29500% -400%',
    markers:true,
    // start: '500% -4300%',
    // end: '500% -4800%',
  }
})
  .to(".bns h5 .bns2", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bns h5",
      scroller: "#main",
      scrub: 1,
      start: '29600% top',
    end: '29500% -400%',
    }
  })
  .to(".bns h5 .bns3", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bns h5",
      scroller: "#main",
      scrub: 1,
      start: '29700% top',
      end: '29500% -400%',
    }
  }).to(".bns h5 .bns4", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bns h5",
      scroller: "#main",
      scrub: 1,
      start: '29800% top',
      end: '29500% -400%',
    }
  }).to(".bns h5 .bns5", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bns h5",
      scroller: "#main",
      scrub: 1,
      start: '29900% top',
      end: '29500% -400%',
    }
  })
  .to(".bns h5 .bns6", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bns h5",
      scroller: "#main",
      scrub: 1,
      start: '30000% top',
      end: '29500% -400%',
    }
  }).to(".bns h5 .bns7", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bns h5",
      scroller: "#main",
      scrub: 1,
      start: '30100% top',
      end: '29500% -400%',
    }
  }).to(".bns h5 .bns8", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bns h5",
      scroller: "#main",
      scrub: 1,
      start: '30200% top',
      end: '29500% -400%',
    }
  }).to(".bns h5 .bns8", {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bns h5",
      scroller: "#main",
      scrub: 1, 
       start: '30300% top',
      end: '29500% -400%',
   
    }
    , onComplete: () => {
      console.log('animation end')
    }
  })
  .to(".bns h5", {
    top: '55%',
    scale: '0.8',
    scrollTrigger: {
      trigger: ".bns h5",
      scroller: "#main",
      scrub: 1,
      start: '31000% top',
      end: '32000% -400%',
      markers: true,
    }
  })

// ------------------------------------bns animation end------------------------------------------------------------------------------------------------------------



var sw = gsap.timeline();
sw.to(".sw h5 .sw1", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  scrollTrigger: {
    trigger: ".sw h5",
    scroller: "#main",
    scrub: 1,
    start: '29700% top',
    end: '29500% -400%',
  }
})
.to(".sw h5 .sw2", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  scrollTrigger: {
    trigger: ".sw h5",
    scroller: "#main",
    scrub: 1,
    start: '29800% top',
    end: '29500% -400%',
  }
})
.to(".sw h5 .sw3", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  scrollTrigger: {
    trigger: ".sw h5",
    scroller: "#main",
    scrub: 1,
    start: '29900% top',
    end: '29500% -400%',
  }
}).to(".sw h5 .sw4", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  scrollTrigger: {
    trigger: ".sw h5",
    scroller: "#main",
    scrub: 1,
    start: '30000% top',
    end: '29500% -400%',
  }
}).to(".sw h5 .sw5", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  scrollTrigger: {
    trigger: ".sw h5",
    scroller: "#main",
    scrub: 1,
    start: '30100% top',
    end: '29500% -400%',
  }
}).to(".sw h5 .sw6", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  scrollTrigger: {
    trigger: ".sw h5",
    scroller: "#main",
    scrub: 1,
    start: '30200% top',
    end: '29500% -400%',
  }
}).to(".sw h5 .sw7", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  scrollTrigger: {
    trigger: ".sw h5",
    scroller: "#main",
    scrub: 1,
    start: '30300% top',
    end: '29500% -400%',
  }
}).to(".sw h5 .sw8", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  scrollTrigger: {
    trigger: ".sw h5",
    scroller: "#main",
    scrub: 1,
    start: '30400% top',
    end: '29500% -400%',
  }
}).to(".sw h5 .sw9", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  scrollTrigger: {
    trigger: ".sw h5",
    scroller: "#main",
    scrub: 1,
    start: '30500% top',
    end: '29500% -400%',
  }
}).to(".sw h5", {
  top: '64%',
  scale: '0.8',
  scrollTrigger: {
    trigger: ".sw h5",
    scroller: "#main",
    scrub: 1,
    start: '500% -5240%',
    end: '500% -5640%',
  }
})