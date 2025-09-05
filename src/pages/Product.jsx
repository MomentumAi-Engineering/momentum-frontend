import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, DollarSign, TrendingDown, AlertTriangle, CheckCircle, Zap, Target, BarChart3, Layers, Shield, Activity, ArrowRight } from 'lucide-react';
import Socials from '../mini-components/Socials.jsx'; 

const ProductPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carousel data for integrations
  const integrationSlides = [
    [
      { name: 'Linear', color: 'bg-blue-500', icon: '📋' },
      { name: 'Gingerbread', color: 'bg-yellow-500', icon: '🍪' },
      { name: 'NotionHQ', color: 'bg-orange-600', icon: '🌞' },
      { name: 'Figma', color: 'bg-purple-500', icon: '🎨' },
      { name: 'Microsoft', color: 'bg-blue-600', icon: '🏢' },
      { name: 'PopSQL', color: 'bg-pink-500', icon: '🔗' },
      { name: 'LangChain', color: 'bg-gray-600', icon: '🔗' },
      { name: 'LangChain', color: 'bg-green-600', icon: '🔗' },
      { name: 'OpenAI', color: 'bg-gray-800', icon: '🤖' }
    ],
    [
      { name: 'Salesforce', color: 'bg-blue-700', icon: '☁️' },
      { name: 'Gingerbread', color: 'bg-yellow-500', icon: '🍪' },
      { name: 'NotionHQ', color: 'bg-orange-600', icon: '🌞' },
      { name: 'Figma', color: 'bg-purple-500', icon: '🎨' },
      { name: 'Microsoft', color: 'bg-blue-600', icon: '🏢' }
    ]
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % integrationSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Section 1: Integrations Carousel */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Who is it For</h1>
          <p className="text-gray-400 text-xl mb-12">Built for everyone—citizens, city crews, and local pros.</p>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {integrationSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
                    {slide.map((integration, index) => (
                      <div key={index} className="flex flex-col items-center space-y-3">
                        <div className={`w-16 h-16 ${integration.color} rounded-lg flex items-center justify-center text-2xl`}>
                          {integration.icon}
                        </div>
                        <span className="text-sm text-gray-400">{integration.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {integrationSlides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-600'}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Problems & Solutions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">EAiSER — Fix City Problems with One Photo</h2>
            <p className="text-gray-400 text-xl">We understand the challenges you face. Here's how we solve them.</p>
          </div>
          
          <div className="flex items-start justify-between">
            {/* Common Pain Points */}
            <div className="w-1/2 pr-8">
              <h3 className="text-2xl font-bold mb-8">Common Pain Points We Solve</h3>
              <div className="space-y-4">
                <div className="p-6 rounded-lg border border-transparent hover:border-red-500 transition-colors cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Speed</h4>
                      <p className="text-gray-400">Less than 30 seconds from snapping a photo to submitting a report.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-lg border border-transparent hover:border-red-500 transition-colors cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Accuracy</h4>
                      <p className="text-gray-400">Over 95% accuracy in AI tagging and auto-routing issues.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-lg border border-transparent hover:border-red-500 transition-colors cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingDown className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Cost-Free</h4>
                      <p className="text-gray-400">Cost-Free</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-lg border border-transparent hover:border-red-500 transition-colors cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Data Overload Without Insights</h4>
                      <p className="text-gray-400">Drowning in data but struggling to make informed decisions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center items-center px-8">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>

            {/* Our AI Solutions */}
            <div className="w-1/2 pl-8">
              <h3 className="text-2xl font-bold mb-8">Our AI Solutions</h3>
              <div className="space-y-4">
                <div className="p-6 rounded-lg border border-gray-800 hover:border-green-500 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Intelligent Automation</h4>
                      <p className="text-gray-400">AI-powered systems that handle routine tasks 24/7</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-lg border border-transparent hover:border-green-500 transition-colors cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Cost Optimization</h4>
                      <p className="text-gray-400">Reduce operational costs by up to 40% with smart automation</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-lg border border-transparent hover:border-green-500 transition-colors cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Scalable Growth</h4>
                      <p className="text-gray-400">Systems that grow with your business automatically</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-lg border border-transparent hover:border-green-500 transition-colors cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Actionable Insights</h4>
                      <p className="text-gray-400">Transform your data into clear, actionable business intelligence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our AI Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our AI Services</h2>
            <p className="text-gray-400 text-xl">Comprehensive AI solutions designed to transform your business operations and drive growth.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Automation Solutions */}
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="w-12 h-12 bg-red-900 rounded-lg flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-4">AI Automation Solutions</h3>
              <p className="text-gray-400 mb-6">Custom AI agents that automate repetitive tasks, streamline workflows, and operate 24/7 without human intervention.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Process Automation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Workflow Optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">24/7 Operations</span>
                </li>
              </ul>
              {/* <button className="flex items-center space-x-2 text-white hover:text-gray-300">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button> */}
            </div>

            {/* Intelligent Analytics */}
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="w-12 h-12 bg-red-900 rounded-lg flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-4">Intelligent Analytics</h3>
              <p className="text-gray-400 mb-6">Transform your data into actionable insights with AI-powered analytics that predict trends and guide decisions.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Predictive Analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Data Visualization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Real-time Insights</span>
                </li>
              </ul>
              {/* <button className="flex items-center space-x-2 text-white hover:text-gray-300">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button> */}
            </div>

            {/* Custom AI Integration */}
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="w-12 h-12 bg-red-900 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-4">Custom AI Integration</h3>
              <p className="text-gray-400 mb-6">Seamlessly integrate AI capabilities into your existing systems and processes for maximum efficiency.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">System Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Custom Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Scalable Solutions</span>
                </li>
              </ul>
              {/* <button className="flex items-center space-x-2 text-white hover:text-gray-300">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Core Pillars */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Core Pillars of Our AI Solutions</h2>
            <p className="text-gray-400 text-xl max-w-4xl mx-auto">We don't just build AI; we build a competitive advantage for your business. Our entire platform is founded on key principles that deliver tangible results.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {/* Seamless Integration */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-red-900 rounded-lg flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-4">Seamless Integration</h3>
              <p className="text-gray-400">Our AI agents are built to integrate flawlessly with your existing CRM, ERP, and marketing automation platforms, ensuring a unified workflow from day one.</p>
            </div>

            {/* Rapid Deployment */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-red-900 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-4">Rapid Deployment</h3>
              <p className="text-gray-400">Go from strategy to a fully operational AI solution in as little as 3-15 days. We prioritize speed-to-value without compromising on quality or performance.</p>
            </div>

            {/* Scalable Performance */}
            <div className="bg-red-900 rounded-lg p-6">
              <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-red-200" />
              </div>
              <h3 className="text-xl font-bold text-red-200 mb-4">Scalable Performance</h3>
              <p className="text-red-100">Built on enterprise-grade architecture, our solutions are designed to scale with your business, handling increased workloads and complexity effortlessly.</p>
            </div>

            {/* Bank-Grade Security */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-red-900 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-4">Bank-Grade Security</h3>
              <p className="text-gray-400">We adhere to the strictest data protection and compliance standards, ensuring your sensitive business information is always secure and confidential.</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-lg mb-8">Ready to experience these advantages for your business?</p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg">
              Schedule Your Strategy Call
            </button>
          </div>
        </div>
      </section>

           <section className="px-6 md:px-20 py-16 flex justify-center">
                  <Socials />
            </section>
    </div>
  );
};

export default ProductPage;