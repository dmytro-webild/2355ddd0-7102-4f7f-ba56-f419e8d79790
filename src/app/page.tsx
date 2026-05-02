"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Hammer, SquareStack, CloudLightning } from "lucide-react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
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
          <HeroBillboard
            background={{ variant: "gradient-bars" }}
            title="Installed as designed by the Manufacture. "
            description="Manufactures Roofing & Siding creates high-end exterior transformations with elite craftsmanship and white-glove service trusted for generations."
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DAe4BrTfI9CrjBldicDiGfbMZB/tmp/ariel-view-of-single-residential-roof-wi-1777733212118-a34595f2.png"
            imageAlt="Luxury home exterior"
            buttons={[{ text: "Get Free Estimate", href: "#contact" }, { text: "View Projects", href: "#about" }]}
          />
          <HeroBillboardCarousel
            background={{ variant: "plain" }}
            title="Our Craftsmanship in Action"
            description="A visual look at our premium exterior transformations and elite roofing work."
            mediaItems={[
              { imageSrc: "http://img.b2bpic.net/free-photo/man-walking-roof_1321-1041.jpg?_wi=1", imageAlt: "Roof installation detail" },
              { imageSrc: "http://img.b2bpic.net/free-photo/construction-worker-doing-his-job-with-belt_23-2149343658.jpg?_wi=1", imageAlt: "Construction worker" },
              { imageSrc: "http://img.b2bpic.net/free-photo/luxury-house-real-estate-sale-property-generative-ai_169016-29365.jpg?_wi=1", imageAlt: "Completed exterior" }
            ]}
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
            imageSrc="http://img.b2bpic.net/free-photo/luxury-house-real-estate-sale-property-generative-ai_169016-29365.jpg?_wi=2"
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