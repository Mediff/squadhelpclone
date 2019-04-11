import monvelli from '../../images/monvelli.jpg';
import avanti from '../../images/avanti.jpg';
import pepper from '../../images/pepper.jpg';
import westgate from '../../images/westgate.jpg';
import stow from '../../images/stow.jpg';
import kreo from '../../images/kreo.jpg';
import highjump from '../../images/highjump.jpg';
import petesNuts from '../../images/petesNuts.jpg';
import property from '../../images/property.jpg';

export const loginPlaceholders = ['Email', 'Password'];

export const loginInputKeys = ['email', 'password'];

export const registerPlaceholders = ['First Name', 'Last Name', 'Display Name', 'Email', 'Password', 'Confirm Password'];

export const registerInputKeys = ['firstName', 'lastName', 'displayName', 'email', 'password', 'confirmPassword'];

export const registerRadioValues = ['customer', 'creative'];

export const registerRadioHeadText = ['Join As a Buyer', 'Join As a Creative'];

export const registerRadioBottomText = ['I am looking for a Name, Logo or Tagline for my business, brand or product.',
    'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'];

export const sideNavIcons = ['far fa-square', 'far fa-check-square', 'fas fa-briefcase'];

export const sideNavText = ['Active contests', 'Completed contests', 'Account'];

export const contestTypesDescription = ['Get up and running with the perfect name. ',
    'Kickstart your venture with a unique, memorable logo ',
    'Connect deeply with your target audience with an on-target tagline ',
    'Establish your entire brand identity and save with this bundle.'];

export const contestTypesSubText = ['Pick from our most popular categories, launch a contest and begin receiving ' +
'submissions right away', 'Launch multiple contests and pay a discounted bundle price'];

export const contestTypesTitleText = ['Our Most Popular Categories', 'Save With Our Bundle Packages'];

export const createContestNameHeaders = ['Enter title of your contest', 'What type of Name are you looking for?',
    'Select a category that best describes your business', 'What does your company / business do?',
    'Tell us about your customers', 'Select styles which describes your contest', 'Do you have any documents that might ' +
    'be helpful (Optional)?'];

export const createContestNamePlaceholders = ['Select name for your contest', 'Select type of name',
    'Select your industry', 'e.g. We are an online lifestyle brand that provides stylish and high quality apparel ' +
    'to the expert eco-conscious shopper.', 'Share any relevant information such as their demographics, ' +
    'interests, aspirations etc'];

export const createContestPaymentHeaders = ['Card number', '* Expires', '* Security code', 'Prize'];

export const createContestPaymentPlaceholders = ['Card number', 'MM / YY', 'cvc', '100$'];

export const stepsIndicatorTitle = ['Start a Contest'];

export const stepsIndicatorMessage = ['Launching a contest on Squadhelp is very simple. Select the type of contest you ' +
'would like to launch from the list below. Provide a detailed brief and select a pricing package. Begin receiving submissions instantly!',
'Since you have selected a bundle, let us first setup your Naming contest. Once you have selected your Naming, you will be able ' +
'to launch your next contest'];

export const startPageTitle = ['Find a Perfect Name for'];

export const startPageAnimationListItems = ['a Brand', 'a Company', 'a Startup', 'a Service', 'a Book'];

export const startPageText = ['Launch a naming contest to engage hundreds of naming experts as you’re guided through our ' +
'agency-level naming process. ', 'Or, explore our hand-picked collection of premium names available for immediate purchase'];

export const getImagesArray = [[monvelli, avanti, pepper, monvelli, avanti, pepper, monvelli, avanti, pepper],
    [petesNuts, property, westgate, petesNuts, property, westgate, petesNuts, property, westgate],
    [stow, kreo, highjump, stow, kreo, highjump, stow, kreo, highjump]];

export const userLinks = [{link: '/register' , title: 'Signup'}, {link: '/login', title: 'Login'}];

export const customerLinks = [{link: '/contesttype', title: 'Create Contest'},
    {link: '/dashboard', title: 'Dashboard'}, {link: '/profile', title: 'Profile'}];

export const creativeLinks = [{link: '/dashboard', title: 'Dashboard'}, {link: '/profile', title: 'Profile'}];