import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { isMobile } from "../../lib/Utils";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // TODO
  }, []);

  return (
    <Particles
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ParticlesBackground;

const particlesOptions: ISourceOptions = {
  particles: {
    number: {
      value: isMobile() ? 45 : 80,
      density: {
        enable: true,
        value_area: isMobile() ? 280 : 600,
      },
    },
    color: {
      value: "#e2e8f0",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 4,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
      },
    },
    size: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#e2e8f0",
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: true,
      straight: true,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 100,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: false,
    },
    modes: {
      grab: {
        distance: 300,
        line_linked: {
          opacity: 1,
        },
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
