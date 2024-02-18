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


gsap.set(".page2 .overlay .first", { display: 'none' })

gsap.set(".page2 .overlay .second", { opacity: 0 })
gsap.set(".page2 .overlay .third ", { display: 'none' })
// animation nav contact nd psquare company opcatiy
// timeline for opactiy 0 to 1 and 1 to 0 of contact and psquare company
const navTimeline = gsap.timeline();
navTimeline.to(".nav .pc", {
  display: 'none',

  scrollTrigger: {
    scrub: true,
    trigger: ".nav",
    scroller: "#main",
    start: '10% top',
    end: 'top -10%',

  }
})
  .to(".nav .contact", {
    display: 'initial',
    scrollTrigger: {
      scrub: true,
      trigger: ".nav",
      scroller: "#main",
      start: '150% top',
      end: 'top top',

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
    end: "top -207%"
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
    display: 'none',
    scrollTrigger: {
      trigger: ".bottom-text h2",
      scroller: "#main",
      scrub: true,
      start: '10% top',
      end: 'top -10%',

    }

  })



// ----------------------------------------p2h1 end------------------------------------------
// -------------------------------------------------------------------------------------------first start-------------------------------------------------------------------------

const firstt1 = gsap.timeline();

firstt1.to(".page2 .overlay .first", {
  display: 'initial',
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: true,
    start: '80% top',
    end: 'top -10%',

  }
}).to(".page2 .overlay .first", {
  top: '50%',
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: '270% top',
    end: 'top -50%',

  }
})
  .to(".page2 .overlay .first", {
    scale: '2',
    left: '37%',
    fontFamily: "'montserrat', 'sans-serif'",
    fontWeight: '700',
    fontStyle: 'normal',
    scrollTrigger: {
      trigger: ".bottom-text h2",
      scroller: "#main",
      scrub: 1,
      start: '400% top',
      end: 'top -150%',

    }
  })
  .to(".page2 .overlay .first", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".bottom-text h2",
      scroller: "#main",
      scrub: 1,
      start: '1200% top',
      end: 'top -150%',

    }
  })


// .to(".page2 .overlay .first", {
//   fontWeight: 300,
//   left: '10%',
//   fontSize: '3.5vw',
//   scrollTrigger: {
//     trigger: ".bottom-text h2",
//     scroller: "#main",
//     scrub: 1,
//     start: '1800% top',
//     end: 'top -200%'


//   }
// })

// .to(".page2 .overlay .first", {
//   top: '70%',

//   scrollTrigger: {
//     trigger: ".th h5",
//     scroller: "#main",
//     scrub: true,
//     start: "4200% top",
//     end: "4200% -100%",

//   }
// })
// .to(".page2 .overlay .first", {
//   scale: '2',
//   fontWeight: '700',
//   transform: "translateX(54%)",
//   scrollTrigger: {
//     trigger: ".th h5",
//     scroller: "#main",
//     scrub: true,
//     start: "4800% top",
//     end: "4800% -100%",
//   }
// })


// .to(".page2 .overlay .first", {
//   display: 'none',
//   scrollTrigger: {
//     trigger: ".th h5",
//     scroller: "#main",
//     scrub: true,
//     start: "5000% top",
//     end: "5000% -10%",

//   }
// })





var p2s = gsap.timeline();

p2s.to(".page2 .overlay .second", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: '1200% top',
    end: 'top -10%',

  }
})
  .to(".page2 .overlay .second", {
    top: '28%',
    scrollTrigger: {
      trigger: ".page2 .overlay .second",
      scroller: "#main",
      scrub: true,
      start: "1000% top",
      end: "1000% -50%",

    }
  })
  .to(".page2 .overlay .second", {
    fontWeight: 300,
    left: '10%',
    fontSize: '3.5vw',
    letterSpacing: '2px',
    scrollTrigger: {
      trigger: ".page2 .overlay .second",
      scroller: "#main",
      scrub: true,
      start: "1200% top",
      end: "1200% -80%",

    }
  }
  )
  .to(".page2 .overlay .second", {
    display: 'none',
    scrollTrigger: {
      trigger: ".page2 .overlay .second",
      scroller: "#main",
      scrub: true,
      start: "3000% top",
      end: "3000% -80%",

    }
  }
  )

// .to(".page2 .overlay .second", {
//  opacity:0,
//     scrollTrigger: {
//       trigger: ".page2 .overlay .second",
//       scroller: "#main",
//       scrub: true,
//       start: "15300% top",
//       end: "15300% -80%",
//     }
//   })

//   .to(".page2 .overlay .third", {
//    display:'initial',
//     scrollTrigger: {
//       trigger: ".page2 .overlay .second",
//       scroller: "#main",
//       scrub: true,
//       start: "15000% top",
//       end: "15000% -80%",


//     }
//   })

// -------------------------------------------------------------------------------------------first end---------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------animation on third h1 start-------------------------------------------------------------------------------------------------------------------

var third = gsap.timeline();

third.to(".page2 .overlay .third", {
  top: '52%',
  scrollTrigger: {
    trigger: ".page2 .overlay .third",
    scroller: "#main",
    scrub: true,
    start: "23700% top",
    end: "23700% -50%",
   
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
      start: "24300% top",
      end: "24300% -50%",
     

    }
  })

  .to(".page2 .overlay .thirdspan", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "24800% top",
      end: "24800% -120%",

    }

  })

// --------------------------------------------------gsap four animation--------------
var fr = gsap.timeline();
fr.to(".page2 .overlay .four", {
  display: 'initial',
  scrollTrigger: {
    trigger: ".page2 .overlay .second",
    scroller: "#main",
    scrub: true,
    start: "3000% top",
    end: "3000% -80%",

  }
}
).to(".page2 .overlay .four", {
  top: '52%',
  scrollTrigger: {
    trigger: ".page2 .overlay .second",
    scroller: "#main",
    scrub: true,
    start: "4800% top",
    end: "4800% -300%",



  }
}
)
  .to(".page2 .overlay .four", {
    scale: '2',
    left: '37%',
    fontFamily: "'montserrat', 'sans-serif'",
    fontWeight: '700',
    scrollTrigger: {
      trigger: ".page2 .overlay .second",
      scroller: "#main",
      scrub: true,
      start: "5800% top",
      end: "5800% -80%",

    }
  }
  ).to(".page2 .overlay .four", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".page2 .overlay .four",
      scroller: "#main",
      scrub: true,
      start: '12800% top',
    }
  }
  )



// ----------------------------------five gsap animation------------------------

var fv=gsap.timeline();
fv.to(".page2 .overlay .five", {
  display: 'initial',
  scrollTrigger: {
    trigger: ".page2 .overlay .four",
    scroller: "#main",
    scrub: true,
    start: '12800% top',
  }
}
).to(".page2 .overlay .five", {
  top:'28%',
  scrollTrigger: {
    trigger: ".page2 .overlay .four",
    scroller: "#main",
    scrub: true,
    start: '12700% top',
    end:'12700% -100%',
    
  }
}
).to(".page2 .overlay .five", {
  fontWeight: 300,
  left: '10%',
  fontSize: '3.5vw',
  letterSpacing: '2px',
  scrollTrigger: {
    trigger: ".page2 .overlay .four",
    scroller: "#main",
    scrub: true,
    start: '13500% top',
    end:'13500% -100%',

  }
}
).to(".page2 .overlay .five", {
 opacity:0,
  scrollTrigger: {
    trigger: ".page2 .overlay .four",
    scroller: "#main",
    scrub: true,
    start: '16000% top',
   

  }
}
).to(".page2 .overlay .third", {
  display:'initial',
   scrollTrigger: {
     trigger: ".page2 .overlay .four",
     scroller: "#main",
     scrub: true,
     start: '16000% top',
  
   }
 }
 )
var page2Animations = [
  { element: ".page2 .overlay .yrs1", start: '24500% top', end: '24500% -150%' },
  { element: ".page2 .overlay .yrs2", start: '24540% top', end: '24540% -150%' },
  { element: ".page2 .overlay .yrs3", start: '24580% top', end: '24580% -150%' },
  { element: ".page2 .overlay .yrs4", start: '24620% top', end: '24620% -150%' },
  { element: ".page2 .overlay .yrs5", start: '24660% top', end: '24660% -150%' },
  { element: ".page2 .overlay .yrs6", start: '24700% top', end: '24700% -150%' },
  { element: ".page2 .overlay .yrs7", start: '24740% top', end: '24740% -150%' },
  { element: ".page2 .overlay .yrs8", start: '24780% top', end: '24780% -150%' },
  { element: ".page2 .overlay .yrs9", start: '24820% top', end: '24820% -150%' },
  { element: ".page2 .overlay .yrs10", start: '24860% top', end: '24860% -150%' },
  { element: ".page2 .overlay .yrs11", start: '24900% top', end: '24900% -150%' },
  { element: ".page2 .overlay .yrs12", start: '24940% top', end: '24940% -150%' }
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


// var th = gsap.timeline();

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
      end: animation.end,

    }
  });
});




var th1 = gsap.timeline();

th1.to(".th h5", {
  top: '21%',
  scale: 0.4,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: '1800% top',
    end: '1800% -50%',
  },
  // onComplete: function () {
  //   gsap.to(".th h5", {
  //     top: '19%',
  //     scrollTrigger: {
  //       trigger: ".th h5",
  //       scroller: "#main",
  //       scrub: true,
  //       start: '100% top',
  //       end: '100% -400%'
  //     }
  //   });
  // }
})
gsap.to(".th h5", {
  transform: "translate(46%,-30%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "3750% top",
    end: "3750% -50%",

  }
})







// ------------------------------------------------th animation end--------------------------------------



// -----------------------------------------------------------etu anumatuon start--------------------------
var etu = gsap.timeline();

var animations = [
  { element: ".etu h5 .etuone", start: '1780% top', end: '1780% -50%' },
  { element: ".etu h5 .etutwo", start: '1810% top', end: '1810% -50%' },
  { element: ".etu h5 .etuthree", start: '1840% top', end: '1840% -50%' },
  { element: ".etu h5 .etufour", start: '1870% top', end: '1870% -50%' },
  { element: ".etu h5 .etufive", start: '1900% top', end: '1900% -50%' },
  { element: ".etu h5 .etusix", start: '1930% top', end: '1930% -50%' },
  { element: ".etu h5 .etuseven", start: '1960% top', end: '1960% -50%' },
  { element: ".etu h5 .etueight", start: '1990% top', end: '1990% -50%' },
  { element: ".etu h5 .etunine", start: '2020% top', end: '2020% -50%' }
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
  top: '30%',
  scale: 0.4,
  left: '19.6%',
  fontWeight: '300',
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".etu h5",
    scroller: "#main",
    scrub: true,
    start: '2250% top',
    end: '2250% -50%',

  },
  // onComplete: function () {
  //   gsap.to(".etu h5", {
  //     top: '27%',
  //     ease: "sine.out",
  //     scrollTrigger: {
  //       trigger: ".etu h5",
  //       scroller: "#main",
  //       scrub: true,
  //       start: '100% top',
  //       end: '100% -500%'
  //     }


});
//   }
// })


gsap.to(".etu h5", {
  transform: "translate(0%,-50%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "3750% top",
    end: "3750% -70%",

  }
})


// -------------------------------bsp start animation-------------------------------------------------------------------------------

var bsp = gsap.timeline();

var bspAnimations = [
  { element: ".bsp h5 .bspone", start: '2270% top', end: '2270% -50%' },
  { element: ".bsp h5 .bsptwo", start: '2300% top', end: '2300% -50%' },
  { element: ".bsp h5 .bspthree", start: '2330% top', end: '2330% -50%' },
  { element: ".bsp h5 .bspfour", start: '2360% top', end: '2360% -50%' },
  { element: ".bsp h5 .bspfive", start: '2390% top', end: '2390% -50%' },
  { element: ".bsp h5 .bspsix", start: '2420% top', end: '2420% -50%' },
  { element: ".bsp h5 .bspseven", start: '2450% top', end: '2450% -50%' }
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
  top: '40%',
  scale: 0.6,
  fontWeight: 600,
  left: '28.8%',
  // transform: 'translateX(60%)',
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bsp h5",
    scroller: "#main",
    scrub: true,
    start: '2650% top',
    end: '2650% -50%',

  },
  //     onComplete: function () {
  //       gsap.to('.bsp h5', {
  //         top: '36%',
  //         ease: "sine.out",
  //         scrollTrigger: {
  //           trigger: ".bsp h5",
  //           scroller: "#main",
  //           scrub: true,
  //           start: '100% top',
  //           end: '100% -500%'
  //         }
  //       })
  //     }
});


gsap.to(".bsp h5", {
  transform: "translate(1%,-80%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "3750% top",
    end: "3750% -150%",

  }
})

// // ----------------------------------------------------bsp animation end-----------------------------------------------------------------------------

//-----------------------------------------elf animation start------------------------------------------------------------------


var elf = gsap.timeline();

var elfAnimations = [
  { element: ".elf h5 .elf1", start: '3850% top', end: '3850% -50%' },
  { element: ".elf h5 .elf2", start: '3880% top', end: '3880% -50%' },
  { element: ".elf h5 .elf3", start: '3910% top', end: '3910% -50%' },
  { element: ".elf h5 .elf4", start: '3940% top', end: '3940% -50%' },
  { element: ".elf h5 .elf5", start: '3970% top', end: '3970% -50%' },
  { element: ".elf h5 .elf6", start: '4000% top', end: '4000% -50%' },
  { element: ".elf h5 .elf7", start: '4030% top', end: '4030% -50%' },
  { element: ".elf h5 .elf8", start: '4060% top', end: '4060% -50%' },
  { element: ".elf h5 .elf9", start: '4090% top', end: '4090% -50%' },
  { element: ".elf h5 .elf10", start: '4120% top', end: '4120% -50%' },
  { element: ".elf h5 .elf11", start: '4150% top', end: '4150% -50%' },
  { element: ".elf h5 .elf12", start: '4180% top', end: '4180% -50%' },
  { element: ".elf h5 .elf13", start: '4210% top', end: '4210% -50%' },
  { element: ".elf h5 .elf14", start: '4240% top', end: '4240% -50%' },
  { element: ".elf h5 .elf15", start: '4270% top', end: '4270% -50%' },
  { element: ".elf h5 .elf16", start: '4300% top', end: '4300% -50%' }
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
  top: '55%',
  // transform: 'translateX(32.3%)',
  left: '24%',
  scale: 0.6,
  duration: 10,
  fontWeight: 400,
  scrollTrigger: {
    trigger: ".elf h5",
    scroller: "#main",
    scrub: true,
    start: '4500% top',
    end: '4500% -50%',

  },
  // onComplete: function () {
  //   gsap.to('.elf h5', {
  //     top: '46%',
  //     scrollTrigger: {
  //       trigger: ".elf h5",
  //       scroller: "#main",
  //       scrub: true,
  //       start: '100% top',
  //       end: '100% -100%',
  //     }
  //   })
  // }
});

gsap.to(".elf h5", {
  transform: "translate(1%,-150%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "3750% top",
    end: "3750% -200%",

  }
});

// -----------------------------------------------------bns animation start-------------------------------------------------------------------------
var bns = gsap.timeline();
var bnsAnimations = [
  { element: ".bns h5 .bns1", start: '4500% top', end: '4500% -50%' },
  { element: ".bns h5 .bns2", start: '4530% top', end: '4530% -50%' },
  { element: ".bns h5 .bns3", start: '4560% top', end: '4560% -50%' },
  { element: ".bns h5 .bns4", start: '4590% top', end: '4590% -50%' },
  { element: ".bns h5 .bns5", start: '4620% top', end: '4620% -50%' },
  { element: ".bns h5 .bns6", start: '4650% top', end: '4650% -50%' },
  { element: ".bns h5 .bns7", start: '4680% top', end: '4680% -50%' },
  { element: ".bns h5 .bns8", start: '4710% top', end: '4710% -50%' },
  { element: ".bns h5 .bns9", start: '4740% top', end: '4740% -50%' }
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
  top: '66%',
  scale: '0.9',
  left: '36.7%',
  // transform: "translateX(107%)",
  scrollTrigger: {
    trigger: ".bns h5",
    scroller: "#main",
    scrub: 1,
    start: '5100% top',
    end: '5100% -50%'
  }
});

gsap.to(".bns h5", {
  transform: "translate(3%,-180%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "3750% top",
    end: "3750% -220%",
  }
});

// ------------------------------------bns animation end------------------------------------------------------------------------------------------------------------


var swAnimations = [
  { element: ".sw h5 .sw1", start: '4500% top', end: '4500% -50%' },
  { element: ".sw h5 .sw2", start: '4530% top', end: '4530% -50%' },
  { element: ".sw h5 .sw3", start: '4560% top', end: '4560% -50%' },
  { element: ".sw h5 .sw4", start: '4590% top', end: '4590% -50%' },
  { element: ".sw h5 .sw5", start: '4620% top', end: '4620% -50%' },
  { element: ".sw h5 .sw6", start: '4650% top', end: '4650% -50%' },
  { element: ".sw h5 .sw7", start: '4680% top', end: '4680% -50%' },
  { element: ".sw h5 .sw8", start: '4710% top', end: '4710% -50%' },
  { element: ".sw h5 .sw9", start: '4740% top', end: '4740% -50%' }
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



sw.to(".sw h5", {
  top: '79%',
  scale: '0.9',
  scrollTrigger: {
    trigger: ".bns h5",
    scroller: "#main",
    scrub: 1,
    start: '5100% top',
    end: '5100% -50%'
  }
});

gsap.to(".sw h5", {
  transform: "translate(2%,-250%)",

  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "3750% top",
    end: "3750% -320%",

  }
});



// -----------------------------------------------cm animation start------------------------------------------------------------------------------------
var cmAnimations = [
  { element: ".cm h5 .cm1", start: '8300% top', end: '8300% -80%' },
  { element: ".cm h5 .cm2", start: '8330% top', end: '8360% -80%' },
  { element: ".cm h5 .cm3", start: '8360% top', end: '8360% -80%' },
  { element: ".cm h5 .cm4", start: '8390% top', end: '8390% -80%' },
  { element: ".cm h5 .cm5", start: '8420% top', end: '8420% -80%' },
  { element: ".cm h5 .cm6", start: '8450% top', end: '8450% -80%' },
  { element: ".cm h5 .cm7", start: '8480% top', end: '8480% -80%' },
  { element: ".cm h5 .cm8", start: '8510% top', end: '8510% -80%' },
  { element: ".cm h5 .cm9", start: '8540% top', end: '8540% -80%' },
  { element: ".cm h5 .cm10", start: '8570% top', end: '8570% -80%' },
  { element: ".cm h5 .cm11", start: '8600% top', end: '8600% -80%' },
  { element: ".cm h5 .cm12", start: '8630% top', end: '8630% -80%' },
  { element: ".cm h5 .cm13", start: '8660% top', end: '8660% -80%' }
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
  top: '24.5%',
  scale:0.6,
  left:'26%', 
  scrollTrigger: {
    trigger: ".cm h5",
    scroller: "#main",
    scrub: true,
    start: "9100% top",
    end: "9100% -100%",
  
  },
})

.to(".cm h5", {
  transform: "translate(0%,-60%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".cm h5",
    scroller: "#main",
    scrub: true,
    start: "9700% top",
    end: "9700% -80%",
  },
});




// ------------------------------------cmp animation----------------------------------
var cmp = gsap.timeline()
cmp.to(".cm p", {
  top: '45%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".cm h5",
    scroller: "#main",
    scrub: true,
    start: "9100% top",
    end: "9100% -100%",
   

  },
})
  .to(".cm .cmp", {

    opacity: 0,
    scrollTrigger: {
      trigger: ".cm h5",
    scroller: "#main",
    scrub: true,
    start: "9700% top",
    end: "9700% -80%",
    },
  })


//-------------------------------.inp animation start------------------------
var inp = gsap.timeline()
inp.to(".in h5", {
  top: '28%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".in h5",
    scroller: "#main",
    scrub: true,
    start: "17450% top",
    end: "17450% -80%",

  },
})

.to(".in p", {
  top: '45%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".in h5",
    scroller: "#main",
    scrub: true,
    start: "17450% top",
    end: "17450% -80%",

  },
})
.to(".in h5", {
  transform: "translate(0%,-50%)",
  scrollTrigger: {
    trigger: ".in h5",
    scroller: "#main",
    scrub: 1,
    start: "18450% top",
    end: "18450% -80%",

  },
})

.to(".in .inh", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".in h5",
    scroller: "#main",
    scrub: true,
    start: "18450% top",
    end: "18450% -80%",

  },
})

.to(".in .inp", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".in h5",
    scroller: "#main",
    scrub: true,
    start: "18450% top",
    end: "18450% -80%",

  },
})


//----------------------------------------------------------------------------------------------animation sc start---------------------------------------------------------------var inp=gsap.timeline()
var scp = gsap.timeline();
scp.to(".sc h5", {
  top: '28%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".in h5",
    scroller: "#main",
    scrub: true,
    start: "18600% top",
    end: "18600% -80%",

  },
})
  .to(".sc p", {
    top: '45%',
    opacity: 1,
    scrollTrigger: {
      trigger: ".in h5",
      scroller: "#main",
      scrub: true,
      start: "18600% top",
      end: "18600% -80%",

    },
  })

  .to(".sc h5", {
    transform: "translate(1%,-60%)",

    scrollTrigger: {
      trigger: ".sc h5",
      scroller: "#main",
      scrub: true,
      start: "19600% top",
      end: "19600% -80%",

    },
  })
  .to(".sc .sch", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".sc h5",
      scroller: "#main",
      scrub: true,
      start: "19600% top",
      end: "19600% -80%",

    },
  })
  .to(".sc .scp", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".in h5",
      scroller: "#main",
      scrub: true,
      start: "19600% top",
      end: "19600% -80%",

    },
  })


//  -------------------------ing animation start--------------------------------------------------------------------------------------------------------------------


var ing = gsap.timeline();
ing.to(".ing h5", {
  top: '28%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".ing h5",
    scroller: "#main",
    scrub: true,
    start: "19750% top",
    end: "19750% -80%",

  },
})
  .to(".ing p", {
    top: '45%',
    opacity: 1,
    scrollTrigger: {
      trigger: ".ing h5",
      scroller: "#main",
      scrub: true,
      start: "19750% top",
      end: "19750% -80%",


    },
  })
  .to(".ing h5", {
    transform: "translate(0%,-60%)",
    scrollTrigger: {
      trigger: ".ing h5",
      scroller: "#main",
      scrub: true,
      start: "20750% top",
      end: "20750% -80%",

    },
  })
  .to(".ing .ingh", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".ing h5",
      scroller: "#main",
      scrub: true,
      start: "20750% top",
      end: "20750% -80%",

    },
  })
  .to(".ing .ingp", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".ing h5",
      scroller: "#main",
      scrub: true,
      start: "20750% top",
      end: "20750% -80%",

    },
  })

//  ---------------------------------------------------------------------------imp animation start -----------------------------------------------------



var imp = gsap.timeline();
imp.to(".imp h5", {
  top: '28%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".imp h5",
    scroller: "#main",
    scrub: true,
    start: "20900% top",
    end: "20900% -80%",

  },
})
  .to(".imp p", {
    top: '45%',
    opacity: 1,
    scrollTrigger: {
      trigger: ".imp h5",
      scroller: "#main",
      scrub: true,
      start: "20900% top",
      end: "20900% -80%",


    },
  })
  .to(".imp h5", {
    transform: "translate(0%,-50%)",

    scrollTrigger: {
      trigger: ".imp h5",
      scroller: "#main",
      scrub: true,
      start: "21900% top",
      end: "21900% -80%",

    },
  })
  .to(".imp .imph", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".imp h5",
      scroller: "#main",
      scrub: true,
      start: "21900% top",
      end: "21900% -80%",

    },
  })
  .to(".imp .impp", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".imp h5",
      scroller: "#main",
      scrub: true,
      start: "21900% top",
      end: "21900% -80%",

    },
  })

//------------------------------------------------------------------------------------------------tr animation start-------------------------------------------------------- 

var trp = gsap.timeline();

trp.to(".tr h5", {
  top: '28%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".tr h5",
    scroller: "#main",
    scrub: true,
    start: "22050% top",
    end: "22050% -80%",


  },
})
  .to(".tr p", {
    top: '45%',
    opacity: 1,
    scrollTrigger: {
      trigger: ".tr h5",
      scroller: "#main",
      scrub: true,
      start: "22050% top",
      end: "22050% -80%",



    },
  })
  .to(".tr h5", {
    transform: "translate(1%,-100%)",

    scrollTrigger: {
      trigger: ".tr h5",
      scroller: "#main",
      scrub: true,
      start: "23050% top",
      end: "23050% -80%",


    },
  })
  .to(".tr .trh", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".tr h5",
      scroller: "#main",
      scrub: true,
      start: "23050% top",
      end: "23050% -80%",

    },
  })
  .to(".tr .trp", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".tr h5",
      scroller: "#main",
      scrub: true,
      start: "23050% top",
      end: "23050% -80%",

    },
  })
  .to(".page2 .overlay .lastsim", {
    // opacity: 1,
    // transform: 'translate(0,-200%)',
    top:'-27%',
    color: '#fff',

    // background: "transparent linear-gradient(197deg, #ECE7E100 0%, #82638F57 35%, #330152 100%) 0% 0% no-repeat padding-box",
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "26300% top",
      end: "26300% -100%",
      

    }
  }) .to(".page2 .overlay .third", {
    // opacity: 1,
    // transform: 'translate(0,-200%)',
  
    color: '#fff',

    // background: "transparent linear-gradient(197deg, #ECE7E100 0%, #82638F57 35%, #330152 100%) 0% 0% no-repeat padding-box",
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "26300% top",
      end: "26300% -100%",
      

    }
  })
  .to(".page2 .overlay .yrs", {
    // opacity: 1,
    top: '22%',
    color: '#fff',

    // background: "transparent linear-gradient(197deg, #ECE7E100 0%, #82638F57 35%, #330152 100%) 0% 0% no-repeat padding-box",
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "26300% top",
      end: "26300% -100%",

    }
  })
  .to(".page2 .overlay2 ", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "26300% top",
      end: "26300% -100%",

    }
  })
  .to(".frm .frmr", {
    opacity: 1,
    transform: 'translateY(0%)',
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "26300% top",
      end: "26300% -100%",


    },
  })
  .to(".frm .frml", {
    opacity: 1,
    transform: 'translateY(0%)',
    scrollTrigger: {

      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "26300% top",
      end: "26300% -100%",
    },
  })

  .to(".p3btm", {
    opacity: 1,
    bottom: '0',
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "26300% top",
      end: "26300% -100%",
    },
  })
