"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Hammer, SquareStack, CloudLightning } from "lucide-react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="mediumSizeLargeTitles"
      background="blurBottom"
      cardStyle="gradient-mesh"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Services", id: "features" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Manufactures Roofing & Siding "
            button={{ text: "Get Quote", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardTestimonial
            background={{ variant: "gradient-bars" }}
            title="Installed as designed by the Manufacture. "
            description="Manufactures Roofing & Siding creates high-end exterior transformations with elite craftsmanship and white-glove service trusted for generations."
            testimonials={[
              { name: "Bruce M.", handle: "@bruce", testimonial: "Professional, honest, and never pushy.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/man-walking-roof_1321-1041.jpg?_wi=1", imageAlt: "luxury house roofing exterior" },
              { name: "Henry D.", handle: "@henry", testimonial: "Fast response before a storm, transparent pricing.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/construction-worker-doing-his-job-with-belt_23-2149343658.jpg?_wi=1", imageAlt: "luxury house roofing exterior" },
              { name: "Kelly L.", handle: "@kelly", testimonial: "The siding installation transformed our home.", rating: 5, imageSrc: "http://img.b2bpic.net/free-vector/insurance-simple-element_24908-54321.jpg", imageAlt: "luxury house roofing exterior" },
              { name: "Jason L.", handle: "@jason", testimonial: "Top-tier professionalism with attention to detail.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/electrician-examines-construction-site-while-holding-electrical-cable-his-hand-worksite_169016-12127.jpg", imageAlt: "luxury house roofing exterior" },
              { name: "Sarah P.", handle: "@sarah", testimonial: "Flawless installation, highly recommended.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/abandoned-house-with-rusty-stairs_23-2149454810.jpg", imageAlt: "luxury house roofing exterior" },
            ]}
            buttons={[{ text: "Get Free Estimate", href: "#contact" }, { text: "View Projects", href: "#about" }]}
            imageSrc="http://img.b2bpic.net/free-photo/man-walking-roof_1321-1041.jpg?_wi=2"
            imageAlt="Luxury home exterior"
            avatars={[{ src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DAe4BrTfI9CrjBldicDiGfbMZB/tmp/residential-roof-ridge-1777731004834-5a79e302.png", alt: "Satisfied client portrait" }, { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DAe4BrTfI9CrjBldicDiGfbMZB/tmp/black-metal-roof-1777731372774-b064bdc1.png", alt: "Satisfied client portrait" }, { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DAe4BrTfI9CrjBldicDiGfbMZB/tmp/residential-roof-ridge-1777731004834-5a79e302.png", alt: "Satisfied client portrait" }, { src: "http://img.b2bpic.net/free-photo/happy-handsome-dark-haired-latin-man-posing-with-arms-folded-kitchen_74855-8094.jpg", alt: "Satisfied client portrait" }, { src: "http://img.b2bpic.net/free-photo/young-lady-standing-with-crossed-arms-checked-shirt-hat-looking-confident_176474-47786.jpg", alt: "Satisfied client portrait" }]}
            marqueeItems={[{ type: "text", text: "Premium Roofing" }, { type: "text", text: "Elite Craftsmanship" }, { type: "text", text: "Storm Restoration" }, { type: "text", text: "James Hardie Siding" }, { type: "text", text: "Licensed & Insured" }]}
          />
        </div>

        <div id="about" data-section="about">
          <SplitAbout
            textboxLayout="split"
            useInvertedBackground={false}
            title="Built on Craftsmanship. Driven by Trust."
            description="Manufactures Roofing & Siding specializes in premium roofing systems and high-end exterior remodels, carrying a 3rd-generation legacy of excellence."
            bulletPoints={[{ title: "Elite Craftsmanship", description: "Three generations of expertise in luxury roofing." }, { title: "Transparent Pricing", description: "Clear, honest communication with no hidden costs." }, { title: "Storm Experts", description: "24-hour response guarantee for storm damage." }]}
            imageSrc="http://img.b2bpic.net/free-photo/construction-worker-doing-his-job-with-belt_23-2149343658.jpg?_wi=2"
            mediaAnimation="slide-up"
          />
        </div>

        <div id="features" data-section="features">
          <FeatureBento
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { title: "Luxury Roofing", description: "High-end replacement and repair.", bentoComponent: "reveal-icon", icon: Hammer },
              { title: "James Hardie Siding", description: "Premium durability and curb appeal.", bentoComponent: "reveal-icon", icon: SquareStack },
              { title: "Storm Restoration", description: "Rapid emergency storm repair.", bentoComponent: "reveal-icon", icon: CloudLightning },
            ]}
            title="Our Specialized Services"
            description="We offer a full suite of exterior solutions to enhance your home's value and aesthetic."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardFive
            textboxLayout="default"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Bruce M.", date: "2023-10", title: "Excellent Service", quote: "Professional, honest, and never pushy.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/smiley-father-posing-with-arms-crossed_23-2148414862.jpg" },
              { id: "2", name: "Henry D.", date: "2023-11", title: "Very Fast", quote: "Fast response before a storm, transparent pricing.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/expressive-young-woman-posing_176474-26549.jpg" },
              { id: "3", name: "Kelly L.", date: "2023-12", title: "Transformation", quote: "The siding installation transformed our home.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/front-view-cute-girl-looking-away_23-2148436134.jpg" },
              { id: "4", name: "Jason L.", date: "2024-01", title: "Attention to Detail", quote: "Top-tier professionalism with incredible attention to detail.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/businessman-checking-checklist_1153-1091.jpg" },
              { id: "5", name: "Sarah P.", date: "2024-02", title: "High Quality", quote: "I would absolutely hire them again.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-book-kitchen_23-2148294003.jpg" },
            ]}
            title="Reputation Built One Home At A Time"
            description="Hear from the homeowners we've had the pleasure of serving."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            useInvertedBackground={false}
            faqs={[
              { id: "f1", title: "What service areas do you cover?", content: "We proudly serve luxury homes across New Jersey and New York." },
              { id: "f2", title: "How fast do you respond to storm damage?", content: "We offer a 24-hour response guarantee for all storm damage requests." },
              { id: "f3", title: "Do you offer financing?", content: "Yes, we work with homeowners to provide transparent pricing and flexible options." },
            ]}
            sideTitle="Frequently Asked Questions"
            sideDescription="Get clear answers to the most common questions about our services."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardSeven
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            metrics={[
              { id: "m1", value: "500+", title: "Projects Completed", items: ["Roofing", "Siding", "Gutters"] },
              { id: "m2", value: "4.9", title: "Avg Customer Rating", items: ["Quality", "Service", "Value"] },
              { id: "m3", value: "30+", title: "Years Experience", items: ["Legacy", "Trust", "Skill"] },
            ]}
            title="A Track Record of Success"
            description="Our numbers speak for themselves when it comes to client satisfaction."
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            useInvertedBackground={false}
            title="Book Your Consultation"
            description="Elevate your home's exterior today. Fill out the form and we'll be in touch."
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/luxury-house-real-estate-sale-property-generative-ai_169016-29365.jpg"
            buttonText="Request Free Estimate"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoReveal
            logoText="Manufactures Roofing & Siding"
            leftLink={{ text: "Privacy Policy", href: "#" }}
            rightLink={{ text: "Terms of Service", href: "#" }}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
