import React, { createContext, ReactNode } from "react";
import ExpandingCards from "../pages/ExpandingCard";
import ProgressSteps from "../pages/ProgressSteps";
import RotatingNavigationAnimation from "../pages/RotatingNavigationAnimation";
import HiddenSearchWidget from "../pages/HiddenSearchWidget";
import BlurryLoading from "../pages/BlurryLoading";
import ScrollAnimation from "../pages/ScrollAnimation";
import SplitLandingPage from "../pages/SplitLandingPage";
import FormWave from "../pages/FormWave";
import SoundBoard from "../pages/SoundBoard";
import DadJokes from "../pages/DadJokes";
import EventKeycodes from "../pages/EventKeycodes";
import FaqCollapse from "../pages/FaqCollapse";
import RandomChoicePicker from "../pages/RandomChoicePicker";
import AnimatedNavigation from "../pages/AnimatedNavigation";
import IncrementingCounter from "../pages/IncrementingCounter";
import DrinkWater from "../pages/DrinkWater";
import MovieApp from "../pages/MovieApp";
import BackgroundSlider from "../pages/BackgroundSlider";
import ThemeClock from "../pages/ThemeClock";
import ButtonRippleEffect from "../pages/ButtonRippleEffect";
import DragNDrop from "../pages/DragNDrop";
import DrawingApp from "../pages/DrawingApp";
import KineticLoader from "../pages/KineticLoader";
import ContextPlaceholder from "../pages/ContextPlaceholder";
import StickyNavbar from "../pages/StickyNavbar";
import DoubleVerticalSlider from "../pages/DoubleVerticalSlider";
import ToastNotification from "../pages/ToastNotification";
import GithubProfiles from "../pages/GithubProfiles";
import DoubleClickHeart from "../pages/DoubleClickHeart";
import AutoTextEffect from "../pages/AutoTextEffect";
import PasswordGenerator from "../pages/PasswordGenerator";
import NotesApp from "../pages/NotesApp";
import GoodCheapFast from "../pages/GoodCheapFast";
import AnimationCountdown from "../pages/AnimationCountdown";
import ImageCarousel from "../pages/ImageCarousel";
import Hoverboard from "../pages/Hoverboard";
import Pokedex from "../pages/Pokedex";
import MobileTabNavigation from "../pages/MobileTabNavigation";
import PasswordStrengthBackground from "../pages/PasswordStrengthBackground";
import Background3DBoxes from "../pages/Background3DBoxes";
import VerifyAccountUi from "../pages/VerifyAccountUi";
import LiveUserFilter from "../pages/LiveUserFilter";
import FeedbackUiDesign from "../pages/FeedbackUiDesign";
import CustomRangerSlider from "../pages/CustomRangerSlider";
import NetflixMobileNavigation from "../pages/NetflixMobileNavigation";
import QuizApp from "../pages/QuizApp";
import TestimonialBoxSwitcher from "../pages/TestimonialBoxSwitcher";
import RandomImageFeed from "../pages/RandomImageFeed";
import TodoList from "../pages/TodoList";
import InsectCatchGame from "../pages/InsectCatchGame";

const initProjectList = [
  {
    name: "Expanding Cards",
    href: "expanding-cards",
    image:
      "https://50projects50days.com/img/projects-img/1-expanding-cards.png",
    status: true,
    element: <ExpandingCards />,
  },
  {
    name: "Progress Steps",
    href: "progress-steps",
    image: "https://50projects50days.com/img/projects-img/2-progress-steps.png",
    status: true,
    element: <ProgressSteps />,
  },
  {
    name: "Rotating Navigation", //animation
    href: "rotating-navigation-animation",
    image:
      "https://50projects50days.com/img/projects-img/3-rotating-navigation-animation.png",
    status: true,
    element: <RotatingNavigationAnimation />,
  },
  {
    name: "Hidden Search Widget",
    href: "hidden-search-widget",
    image:
      "https://50projects50days.com/img/projects-img/4-hidden-search-widget.png",
    status: true,
    element: <HiddenSearchWidget />,
  },
  {
    name: "Blurry Loading",
    href: "blurry-loading",
    image: "https://50projects50days.com/img/projects-img/5-blurry-loading.png",
    status: true,
    element: <BlurryLoading />,
  },
  {
    name: "Scroll Animation",
    href: "scroll-animation",
    image:
      "https://50projects50days.com/img/projects-img/6-scroll-animation.png",
    status: false,
    element: <ScrollAnimation />,
  },
  {
    name: "Split Landing Page",
    href: "split-landing-page",
    image:
      "https://50projects50days.com/img/projects-img/7-split-landing-page.png",
    status: true,
    element: <SplitLandingPage />,
  },
  {
    name: "Form Wave",
    href: "form-wave",
    image: "https://50projects50days.com/img/projects-img/8-form-wave.png",
    status: true,
    element: <FormWave />,
  },
  {
    name: "Sound Board",
    href: "sound-board",
    image: "https://50projects50days.com/img/projects-img/9-sound-board.png",
    status: false,
    element: <SoundBoard />,
  },
  {
    name: "Dad jokes",
    href: "dad-jokes",
    image: "https://50projects50days.com/img/projects-img/10-dad-jokes.png",
    status: true,
    element: <DadJokes />,
  },
  {
    name: "Event Keycodes",
    href: "event-keycodes",
    image:
      "https://50projects50days.com/img/projects-img/11-event-keycodes.png",
    status: true,
    element: <EventKeycodes />,
  },
  {
    name: "Faq Collapse",
    href: "faq-collapse",
    image: "https://50projects50days.com/img/projects-img/12-faq-collapse.png",
    status: true,
    element: <FaqCollapse />,
  },
  {
    name: "Random Choice Picker",
    href: "random-choice-picker",
    image:
      "https://50projects50days.com/img/projects-img/13-random-choice-picker.png",
    status: true,
    element: <RandomChoicePicker />,
  },
  {
    name: "Animated Navigation",
    href: "animated-navigation",
    image:
      "https://50projects50days.com/img/projects-img/14-animated-navigation.png",
    status: true,
    element: <AnimatedNavigation />,
  },
  {
    name: "Incrementing Counter",
    href: "incrementing-counter",
    image:
      "https://50projects50days.com/img/projects-img/15-incrementing-counter.png",
    status: true,
    element: <IncrementingCounter />,
  },
  {
    name: "Drink Water",
    href: "drink-water",
    image: "https://50projects50days.com/img/projects-img/16-drink-water.png",
    status: true,
    element: <DrinkWater />,
  },
  {
    name: "Movie App",
    href: "movie-app",
    image: "https://50projects50days.com/img/projects-img/17-movie-app.png",
    status: true,
    element: <MovieApp />,
  },
  {
    name: "Background Slider",
    href: "background-slider",
    image:
      "https://50projects50days.com/img/projects-img/18-background-slider.png",
    status: true,
    element: <BackgroundSlider />,
  },
  {
    name: "Theme Clock",
    href: "theme-clock",
    image: "https://50projects50days.com/img/projects-img/19-theme-clock.png",
    status: true,
    element: <ThemeClock />,
  },
  {
    name: "Button Ripple Effect",
    href: "button-ripple-effect",
    image:
      "https://50projects50days.com/img/projects-img/20-button-ripple-effect.png",
    status: true,
    element: <ButtonRippleEffect />,
  },
  {
    name: "Drag N Drop",
    href: "drag-n-drop",
    image: "https://50projects50days.com/img/projects-img/21-drag-n-drop.png",
    status: true,
    element: <DragNDrop />,
  },
  {
    name: "Drawing App",
    href: "drawing-app",
    image: "https://50projects50days.com/img/projects-img/22-drawing-app.png",
    status: true,
    element: <DrawingApp />,
  },
  {
    name: "Kinetic Loader",
    href: "kinetic-loader",
    image:
      "https://50projects50days.com/img/projects-img/23-kinetic-loader.png",
    status: true,
    element: <KineticLoader />,
  },
  {
    name: "Context Placeholder",
    href: "context-placeholder",
    image:
      "https://50projects50days.com/img/projects-img/24-content-placeholder.png",
    status: true,
    element: <ContextPlaceholder />,
  },
  {
    name: "Sticky Navbar",
    href: "sticky-navbar",
    image: "https://50projects50days.com/img/projects-img/25-sticky-navbar.png",
    status: true,
    element: <StickyNavbar />,
  },
  {
    name: "Double Vertical Slider",
    href: "double-vertical-slider",
    image:
      "https://50projects50days.com/img/projects-img/26-double-vertical-slider.png",
    status: true,
    element: <DoubleVerticalSlider />,
  },
  {
    name: "Toast Notification",
    href: "toast-notification",
    image:
      "https://50projects50days.com/img/projects-img/27-toast-notification.png",
    status: true,
    element: <ToastNotification />,
  },
  {
    name: "Github Profiles",
    href: "github-profiles",
    image:
      "https://50projects50days.com/img/projects-img/28-github-profiles.png",
    status: true,
    element: <GithubProfiles />,
  },
  {
    name: "Double Click Heart",
    href: "double-click-heart",
    image:
      "https://50projects50days.com/img/projects-img/29-double-click-heart.png",
    status: true,
    element: <DoubleClickHeart />,
  },
  {
    name: "Auto Text Effect",
    href: "auto-text-effect",
    image:
      "https://50projects50days.com/img/projects-img/30-auto-text-effect.png",
    status: true,
    element: <AutoTextEffect />,
  },
  {
    name: "Password Generator",
    href: "password-generator",
    image:
      "https://50projects50days.com/img/projects-img/31-password-generator.png",
    status: true,
    element: <PasswordGenerator />,
  },
  {
    name: "Good Cheap Fast",
    href: "good-cheap-fast",
    image:
      "https://50projects50days.com/img/projects-img/32-good-cheap-fast.png",
    status: true,
    element: <GoodCheapFast />,
  },
  {
    name: "Notes App",
    href: "notes-app",
    image: "https://50projects50days.com/img/projects-img/33-notes-app.png",
    status: true,
    element: <NotesApp />,
  },
  {
    name: "Animation Countdown",
    href: "animation-countdown",
    image:
      "https://50projects50days.com/img/projects-img/34-animated-countdown.png",
    status: true,
    element: <AnimationCountdown />,
  },
  {
    name: "Image Carousel",
    href: "image-carousel",
    image:
      "https://50projects50days.com/img/projects-img/35-image-carousel.png",
    status: true,
    element: <ImageCarousel />,
  },
  {
    name: "Hoverboard",
    href: "hoverboard",
    image: "https://50projects50days.com/img/projects-img/36-hoverboard.png",
    status: true,
    element: <Hoverboard />,
  },
  {
    name: "Pokedex",
    href: "pokedex",
    image: "https://50projects50days.com/img/projects-img/37-pokedex.png",
    status: false,
    element: <Pokedex />,
  },
  {
    name: "Mobile Tab Navigation",
    href: "mobile-tab-navigation",
    image:
      "https://50projects50days.com/img/projects-img/38-mobile-tab-navigation.png",
    status: true,
    element: <MobileTabNavigation />,
  },
  {
    name: "Password Strength Background",
    href: "password-strength-background",
    image:
      "https://50projects50days.com/img/projects-img/39-password-strength-background.png",
    status: true,
    element: <PasswordStrengthBackground />,
  },
  {
    name: "Background3DBoxes",
    href: "background-3d-boxes",
    image:
      "https://50projects50days.com/img/projects-img/40-3d-background-boxes.png",
    status: true,
    element: <Background3DBoxes />,
  },
  {
    name: "Verify Account Ui",
    href: "verify-account-ui",
    image:
      "https://50projects50days.com/img/projects-img/41-verify-account-ui.png",
    status: true,
    element: <VerifyAccountUi />,
  },
  {
    name: "Live User Filter",
    href: "live-user-filter",
    image:
      "https://50projects50days.com/img/projects-img/42-live-user-filter.png",
    status: true,
    element: <LiveUserFilter />,
  },
  {
    name: "FeedbackUiDesign",
    href: "feedback-ui-design",
    image:
      "https://50projects50days.com/img/projects-img/43-feedback-ui-design.png",
    status: true,
    element: <FeedbackUiDesign />,
  },
  {
    name: "Custom Range Slider",
    href: "custom-range-slider",
    image:
      "https://50projects50days.com/img/projects-img/44-custom-range-slider.png",
    status: true,
    element: <CustomRangerSlider />,
  },
  {
    name: "Netflix Mobile Navigation",
    href: "netflix-mobile-navigation",
    image:
      "https://50projects50days.com/img/projects-img/45-netflix-mobile-navigation.png",
    status: false,
    element: <NetflixMobileNavigation />,
  },
  {
    name: "Quiz App",
    href: "quiz-app",
    image: "https://50projects50days.com/img/projects-img/46-quiz-app.png",
    status: true,
    element: <QuizApp />,
  },
  {
    name: "Testimonial Box Switcher",
    href: "testimonial-box-switcher",
    image:
      "https://50projects50days.com/img/projects-img/47-testimonial-box-switcher.png",
    status: true,
    element: <TestimonialBoxSwitcher />,
  },
  {
    name: "Random Image Feed",
    href: "random-image-feed",
    image:
      "https://50projects50days.com/img/projects-img/48-random-image-feed.png",
    status: true,
    element: <RandomImageFeed />,
  },
  {
    name: "Todo List",
    href: "todo-list",
    image: "https://50projects50days.com/img/projects-img/49-todo-list.png",
    status: true,
    element: <TodoList />,
  },
  {
    name: "Insect Catch Game",
    href: "insect-catch-game",
    image:
      "https://50projects50days.com/img/projects-img/50-insect-catch-game.png",
    status: true,
    element: <InsectCatchGame />,
  },
];

export const ProjectContext = createContext<{
  projects: Array<{
    name: string;
    href: string;
    image: string;
    status: boolean;
    element: JSX.Element;
  }>;
}>({
  projects: initProjectList,
});

const ProjectContextProvider = ({ children }: { children: ReactNode }) => {
  const projectsData = {
    projects: initProjectList,
  };

  return (
    <ProjectContext.Provider value={projectsData}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
