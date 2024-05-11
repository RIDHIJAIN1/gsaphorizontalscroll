const gallery = document.querySelector(".gallery");

let galleryWidth = gallery.offsetWidth;

let amountToScroll = galleryWidth - window.innerWidth;

gsap.registerPlugin(ScrollTrigger);

const tween=gsap.to(gallery, {
    x: -amountToScroll,
    ease: "none"
});

const images = document.querySelectorAll(".skew-image");

// Function to update skew based on scroll position
function updateSkew() {
    // Get the scroll position
    const scrollPos = window.scrollY;

    // Loop through each image
    images.forEach(image => {
        // Calculate skew based on scroll position
        const skewAmount = scrollPos * 0.009; // Adjust the skew factor as needed

        // Apply skew transformation to the image
        image.style.transform = `skewX(${skewAmount}deg)`;
    });
}




ScrollTrigger.create({
    trigger: ".galleryWrapper",
    start: "center center",
    end: "+=" + amountToScroll,
    pin: true,
    animation:tween,
    // pinSpacing: false,animation:tween,
	scrub:1,
	invalidateOnRefresh:true,

    onUpdate: updateSkew ,
    markers:true,
    // onEnter: () => {
    //     // Initialize the animation when the trigger enters the start position
        
    // },

    // onEnterBack: () => {
    //     // Reverse the animation when the trigger exits the start position
    //     gsap.to(gallery, {
    //         x: 0, // Return to the original position
    //         ease: "none",
    //         duration: 5
    //     });
    // }
});


const lenis = new Lenis()

    //    lenis.on('scroll', (e) => {
    //    console.log(e)
    //    })

         function raf(time) {
         lenis.raf(time)
         requestAnimationFrame(raf)
     }

        requestAnimationFrame(raf)