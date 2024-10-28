'use client'

import Image from 'next/image'
import { ChevronRight, ThumbsUp, Rocket, Layers, Eye, Users, Shield, ChartBar, Settings, Cpu, Award } from 'lucide-react'
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip"
import { motion } from 'framer-motion'

const values = [
  { icon: <ThumbsUp className="h-10 w-10" />, title: 'Customer Success', description: "'We prioritize our customers' success above all else, ensuring they achieve their hiring goals efficiently.' "},
  { icon: <Rocket className="h-10 w-10" />, title: 'Innovation', description: "'We constantly push the boundaries of what's possible in recruitment technology.' "},
  { icon: <Layers className="h-10 w-10" />, title: 'Simplicity', description: "'We believe in making complex processes simple and user-friendly.' "},
  { icon: <Eye className="h-10 w-10" />, title: 'Transparency', description: "'We maintain open and honest communication with our clients and within our team.' "},
  { icon: <Users className="h-10 w-10" />, title: 'Inclusivity', description: "'We champion diversity and ensure our tools promote fair and unbiased hiring.' "},
  { icon: <Shield className="h-10 w-10" />, title: 'Security', description: "'We prioritize the protection of our clients' data and maintain the highest security standards.' "},
]

const journey = [
  { date: 'Aug 2021', title: 'IDC Names Arctic Wolf a Leader', icon: <ChartBar />, description: 'Our journey began with a vision to revolutionize the hiring process.' },
  { date: 'Feb 2022', title: 'Arctic Wolf Incident Launch', icon: <Settings />, description: 'We introduced our groundbreaking AI-powered assessment tools.' },
  { date: 'Oct 2022', title: 'Arctic Wolf Expands to ANZ', icon: <Cpu />, description: 'Our solutions went global, entering key European markets.' },
  { date: 'May 2023', title: 'Arctic Wolf on CNBC Disruptor 50', icon: <Award />, description: 'Recognition of our innovative approach to recruitment technology.' },
]

// Add loading state for images
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${w}" height="${h}" fill="#f6f7f8"/>
</svg>
`

// Add proper image blur data URL
const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-zinc-900">
      <header role="banner" className="sticky inset-x-0 w-full top-0 z-50 border-b backdrop-blur bg-white">
        <nav className="flex items-center w-full h-[54px] md:container justify-between px-6 md:px-8">
          {/* Convert HTML comments to JSX comments */}
          {/* Logo Section */}
          <div className="flex space-x-8">
            <a className="font-bold text-xl" href="/">
              <div className="relative flex space-x-2 h-10 md:w-fit items-center justify-center text-black -ml-2">
                {/* Light Mode Logo */}
                <img alt="logo" 
                     className="dark:hidden block h-8 w-8" 
                     src="/logo.webp" 
                     width="40" 
                     height="40" />
                <span className="lg:hidden font-bold">Everything Talent</span>
                <span className="hidden font-bold lg:inline-block">Everything Talent</span>
              </div>
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex gap-8 font-medium items-center">
            <li className="font-regular text-gray-600 text-sm hover:text-gray-800">
              <span>Home</span>
            </li>
            <li className="font-regular text-gray-600 text-sm hover:text-gray-800">
              <span>About</span>
            </li>
            <li className="font-regular text-gray-600 text-sm hover:text-gray-800">
              <span>Use Cases</span>
            </li>
            <li className="font-regular text-gray-600 text-sm hover:text-gray-800">
              <span>Pricing</span>
            </li>
            <li className="font-regular text-gray-600 text-sm hover:text-gray-800">
              <span>Resources</span>
            </li>
            <li className="font-regular text-gray-600 text-sm hover:text-gray-800">
              <span>Blog</span>
            </li>
            <li className="font-regular text-gray-600 text-sm hover:text-gray-800">
              <span>Support</span>
            </li>
          </ul>

          {/* Right Side Actions */}
          <div className="flex gap-5">
            {/* Login Button */}
            <div className="ml-6 hidden lg:block">
              <a className="w-full" href="/login">
                <button className="inline-flex items-center justify-center text-sm font-medium bg-gradient-to-b from-blue-500 to-blue-600 text-white h-10 px-4 py-2 rounded group w-full">
                  Login
                  <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu hover:cursor-pointer lg:hidden -mr-2">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </div>
        </nav>
      </header>

      {/* Add ref to main content for animations */}
      <main role="main">
        {/* Hero Section - updated styling and layout */}
        <section className="bg-white py-20 md:py-22 flex items-center justify-center min-h-[80vh]" aria-label="Hero">
          <div className="md:container px-4 sm:px-6 text-zinc-900 relative max-w-7xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between lg:gap-0 md:gap-12">
              <div>
                <p className="text-transparent bg-clip-text bg-[linear-gradient(to_right,_#000_0%,_#3c3cbf_50%)] font-bold text-[2.2rem] lg:text-7xl md:mr-12 md:mt-0 text-center md:w-full mt-12 md:text-left">
                  Everything Talent simplifies hiring with a free ATS and AI-driven assessments.
                </p>
              </div>
              <div className="md:mr-[70px] min-w-80">
                <div className="relative flex justify-center lg:flex-col mb-8 md:mb-0">
                  <Image
                    //src="../../public/about1.webp?height=400&width=400"
                    src="/about1.webp"
                    alt="Everything Talent simplifies hiring"
                    width={400}
                    height={400}
                    priority
                    className="rotate-45 w-48 h-48 border-[3px] dark:border-[#3577f39a] lg:w-80 lg:h-80 object-cover"
                  />
                  <Image
                    //src="/placeholder.svg?height=300&width=300"
                    src="/about2.webp"
                    alt="AI-driven assessments"
                    width={300}
                    height={300}
                    priority
                    className="hidden md:block -mt-16 rotate-45 border dark:border-[#3577f39a] w-48 h-48 lg:w-80 lg:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="our-story" className="py-14 md:py-24 bg-gray-50 flex items-center justify-center">
          <div className="container px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-zinc-900">Our Story</h2>
              <p className="text-xl text-zinc-600 mb-4 max-w-2xl mx-auto">
                We not only make the world's most comfortable hammocks, but through training and sustainable job creation, we empower our weavers and their families to break the cycle of poverty and build a brighter future.
              </p>
            </div>
            {['The Journey to Transform Recruitment', 'Combining Innovation with Efficiency', 'Democratizing Recruitment Tools'].map((title, index) => (
              <div key={index}>
                <Card className="mt-12 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      {/* Content Section */}
                      <div className={`${index === 1 ? 'order-2' : 'order-1'}`}>
                        <CardTitle className="text-2xl font-bold mb-4">{title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed text-muted-foreground">
                          Our journey began with a simple yet powerful idea: to make hiring easier, fairer, and more efficient for companies of all sizes. We've combined cutting-edge AI technology with user-friendly interfaces to create a platform that transforms the recruitment process.
                        </CardDescription>
                      </div>
                      {/* Image Section */}
                      <div className={`${index === 1 ? 'order-1' : 'order-2'}`}>
                        <Image
                          src={`/story_${index + 1}.webp`}
                          width={400}
                          height={300}
                          alt={title}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <section id="our-values" className="py-14 md:py-24 bg-white flex items-center justify-center">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-zinc-900">Our Values</h2>
              <p className="text-xl text-zinc-600 mb-4">At Everything Talent, our core values drive everything we do</p>
            </div>
            
            {/* Values Layout Container */}
            <div className="relative w-full max-w-[1200px] h-[1200px] mx-auto">
              {/* Center Image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Image
                  src="/business-person-futuristic-business-environment.webp"
                  width={500}    // Increased to 500
                  height={500}   // Increased to 500
                  alt="Futuristic Business Environment"
                  className="shadow-lg"
                />
              </div>

              {/* Values Cards */}
              {/* Customer Success - Top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[10%]">
                <Card className="w-64 h-64 bg-white">  {/* Removed shadow-sm */}
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <ThumbsUp className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center">Customer Success</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">
                      We prioritize our customers' success above all else, ensuring they achieve their hiring goals efficiently.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Innovation - Left Top */}
              <div className="absolute top-[25%] left-0">
                <Card className="w-64 h-64 bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Rocket className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center">Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">
                      We constantly push the boundaries of what's possible in recruitment technology.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Simplicity - Left Bottom */}
              <div className="absolute bottom-[25%] left-0">
                <Card className="w-64 h-64 bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Layers className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center">Simplicity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">
                      We believe in making complex processes simple and user-friendly.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Transparency - Right Top */}
              <div className="absolute top-[25%] right-0">
                <Card className="w-64 h-64 bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Eye className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center">Transparency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">
                      We maintain open and honest communication with our clients and within our team.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Inclusivity - Right Bottom */}
              <div className="absolute bottom-[25%] right-0">
                <Card className="w-64 h-64 bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center">Inclusivity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">
                      We champion diversity and ensure our tools promote fair and unbiased hiring.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Security - Bottom */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[10%]">
                <Card className="w-64 h-64 bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center">Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">
                      We prioritize the protection of our clients' data and maintain the highest security standards.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="our-team" className="py-14 md:py-24 bg-gray-50 flex items-center justify-center">
          <div className="container px-4 mx-auto max-w-[1800px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-zinc-900">Our Experts Team</h2>
              <p className="text-xl text-zinc-600 mb-4 max-w-[1400px] mx-auto leading-relaxed"> {/* Increased max-width and adjusted line height */}
                At Everything Talent, our innovative team develops AI-driven assessments and an advanced ATS to modernize hiring. 
                We focus on reducing bias, making recruitment efficient, and providing accessible tools for companies of all sizes to attract top talent.
              </p>
            </div>
            
            {/* Diamond Pattern Layout */}
            <div className="flex flex-col items-center gap-8">
              {/* Row 1 - 1 member */}
              <div className="flex gap-36"> {/* Increased horizontal gap to 36 (144px) */}
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
              </div>
              
              {/* Row 2 - 2 members */}
              <div className="flex gap-36">
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
              </div>
              
              {/* Row 3 - 3 members */}
              <div className="flex gap-36">
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
              </div>
              
              {/* Row 4 - 4 members */}
              <div className="flex gap-36">
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
              </div>
              
              {/* Row 3 - 3 members */}
              <div className="flex gap-36">
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
              </div>
              
              {/* Row 2 - 2 members */}
              <div className="flex gap-36">
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
              </div>
              
              {/* Row 1 - 1 member */}
              <div className="flex gap-36">
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  width={100}
                  height={100}
                  alt="Team Member"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Culture Section */}
        <section className="py-12 bg-white flex items-center justify-center">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="mb-12">
              <Card className="max-w-3xl mx-auto bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold tracking-tighter mb-3 text-left"> {/* Reduced from text-3xl/4xl/5xl to text-2xl */}
                    Our Culture
                  </CardTitle>
                  <CardDescription className="text-base text-zinc-600 text-left"> {/* Reduced from text-xl to text-base */}
                    We believe in fostering a culture of innovation, collaboration, and continuous learning. Our team members are empowered to think creatively, take initiative, and make a real impact in transforming the recruitment landscape.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-left"> {/* Reduced from text-xl to text-lg */}
                        Innovation at Our Core
                      </h3>
                      <p className="text-sm text-zinc-600 text-left"> {/* Reduced to text-sm */}
                        We encourage bold thinking and creative problem-solving to develop cutting-edge recruitment solutions.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-left">
                        Collaborative Environment
                      </h3>
                      <p className="text-sm text-zinc-600 text-left">
                        Our team thrives on open communication, knowledge sharing, and mutual support.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-left">
                        Growth Mindset
                      </h3>
                      <p className="text-sm text-zinc-600 text-left">
                        We invest in our team's professional development and celebrate continuous learning.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="text-left text-sm">
                    <span>Contact Us</span>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Journey section - updated timeline styling */}
        <section id="our-journey" className="bg-white pt-[2rem] md:py-[4rem] flex items-center justify-center"> {/* Light background */}
          <div className="w-full md:container px-4 sm:px-6 max-w-7xl mx-auto">
            <div className="flex justify-center md:container px-4 sm:px-6 mb-6 md:mb-[10rem]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-zinc-900">Our Journey</h2>
                <p className="text-xl text-zinc-600 mb-4 max-w-[1400px] mx-auto">
                  Since our founding in 2021, Arctic Wolf has risen to the rank of market leader in security operations, adding thousands of employees and customers, as well as a trophy case of awards along the way.
                </p>
              </motion.div>
            </div>
            <div className="relative mx-auto flex">
              <div className="flex flex-col justify-between gap-0 w-full">
                {journey.map((event, index) => (
                  <div key={index} className={`relative -mt-20 flex justify-start h-fit w-1/2 flex-col ${index % 2 === 0 ? '' : 'self-end'}`}>
                    <div className={`sticky flex flex-col mt-3 border border-[#3577f39a] py-[10px] md:flex-row z-10 items-end top-60 ${index % 2 === 0 ? 'self-end rotate-180' : 'self-start'} bg-gradient-to-r from-[#003f6c] via-[#61beef] to-[#00aaff]`}>
                      <div className="h-14 absolute w-14 -left-[15%] -top-[18px] flex self-end rounded-full bg-sky-500 items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-black border border-[rgb(14,165,233)] flex items-center justify-center">
                          <span className="text-white">{event.icon}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`relative flex -mt-6 h-fit md:w-[90%] lg:w-[80%] ${index % 2 === 0 ? 'justify-end' : 'self-end'} z-20`}>
                      <div className="relative border border-blue-300 dark:border-[#3577f39a] py-4 px-8 max-w-[24rem] bg-gradient-to-br from-black via-violet-900 to-violet-500 transition-all duration-500 shadow-lg hover:shadow-[0_4px_8px_0_rgba(75,0,130,0.5)] rounded-lg">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 font-bold text-xl">
                          {event.date}
                        </p>
                        <div>
                          <Image
                            src={`/ai1.webp?height=212&width=317&text=${event.title}`}
                            width={317}
                            height={212}
                            alt={event.title}
                            className="rounded-lg border max-h-[212px] w-[317px] h-full"
                          />
                        </div>
                        <h3 className="text-[16px] flex gap-2 items-center font-bold text-white mt-2 opacity-100">
                          {event.title}
                          <ChevronRight />
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ height: 'calc(100% + 176px)' }} className="absolute -mt-40 left-1/2 transform -translate-x-1/2 top-0 overflow-hidden w-4 h-[calc(100%+10rem)] bg-gradient-to-r from-sky-100 via-sky-300 to-sky-500 [mask-image:linear-gradient(to_bottom,transparent_0%,black_1%,black_99%,transparent_100%)]">
                <div style={{ height: '0px', opacity: 1 }} className="absolute inset-x-0 top-8 w-4 bg-gradient-to-t from-sky-500 via-sky-400 to-transparent from-[0%] via-[10%] rounded-sm"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Replace the existing footer with this new one */}
      <footer className="bg-[#000000] border-t py-12 mt-auto">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.webp"
                  alt="Everything Talent Logo"
                  width={40}
                  height={40}
                  className="dark:invert"
                />
                <span className="font-bold text-xl text-white">Everything Talent</span>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                {['Blogs', 'Success Stories', 'Case Studies', 'Whitepapers', 'FAQs', 'Hiring Guides', 'Support']
                  .map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-gray-200">
                        {item}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Get Started */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Get Started</h3>
              <ul className="space-y-2">
                {['Pricing', 'Hiring Solutions', 'Funded Startups', 'Free Trial', 'Contact Support', 'Request Demo', 'Trust']
                  .map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-gray-200">
                        {item}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'CCPA Compliance']
                  .map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-gray-200">
                        {item}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div>
            <Image
              src="/skyline.webp"
              alt="San Francisco skyline"
              width={1000}
              height={60}
              className="mb-4 md:mb-0 dark:invert mx-auto"
            />
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">
                © 2024 Everything Talent Labs, LLC. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}