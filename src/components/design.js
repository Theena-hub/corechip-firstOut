import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Tab, Nav } from 'react-bootstrap';
import Navigation from "./nav";
import Footer from "./footer";
import serviceSecOneImg from "../assets/img/serviceSecOneImg.svg";
const Design = () => {
    useEffect(() => {
        window.scrollTo(0, 0);  // when page this page is call from another page its working
    }, []);
    return (
        <>
            {/* navbar - start */}
            <Navigation />
            {/* navbar - end */}
            {/* hero section - start */}
            <div className="container-fluid hero serviceSecOne d-flex justify-content-center align-items-center">
                <img className="serviceSecOneImg" src={serviceSecOneImg} alt='corechip' />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                            <div className="">
                                <h1 className="titleOne fw-600 black-232323">Electronic Design</h1>
                                <p className="description fw-400 black-272727 mb-25">Corechiptech’s electronic product design, development, and prototyping services will enable you to transform your product from initial concept to production-ready design.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero section - end */}
            {/* process section - start */}
            <div className="container-fluid serviceSecTwo py-50">
                <div className="container">
                    <Tab.Container id="horizontal-tab" defaultActiveKey="design">
                        <div className="row row-gap">
                            <div className="col-lg-12 col-md-12">
                                <Tab.Content>
                                    <Tab.Pane eventKey="design">
                                        <Tab.Container id="vertical-design-tabs" defaultActiveKey="v-pills-link1">
                                            <div className="row row-gap">
                                                <div className="col-lg-8 col-md-8">
                                                    <Tab.Content className="bgColor-F3F5F7 p-20 br-15">
                                                        <Tab.Pane eventKey="v-pills-link1">
                                                            <h1 className="black fw-500 titleThree mb-20">Product Development Process</h1>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Specification</h1>
                                                                <p className="black fw-400 descriptionThree">At Corechip, the start of every design project consists of ensuring we have a complete understanding of your requirements and have developed a robust, agreed design specification. This can be straightforward but often requires one or more face-to-face meetings. This process helps us to provide you with an accurate quotation and enables you to meet us, work with us and decide whether we are the right design partner for your project.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Proposal</h1>
                                                                <p className="black fw-400 descriptionThree">With this design specification we are able to generate a reliable quotation, with no hidden costs, and an accurate project timescale in the product design proposal.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Feasibility</h1>
                                                                <p className="black fw-400 descriptionThree">We are always happy to undertake feasibility and research projects and will quote for this stage of a project separately if required. A feasibility study is a good way to understand whether your goals are achievable and can give the confidence to invest further in your design project.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Concept Design</h1>
                                                                <p className="black fw-400 descriptionThree">Work with us to compile aesthetic guidelines including existing product examples, materials, finishes, textures and colours. We'll then provide you with a selection of sketch, rendered or 3D modelling concepts along with advice on potential cost and mechanical assembly.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Circuit Design</h1>
                                                                <p className="black fw-400 descriptionThree">Our engineering team uses Pulsonix or Altium to undertake electronic circuit design / schematic capture. Schematics are carefully reviewed against the design specification before proceeding to PCB layout.</p>
                                                                <p className="black fw-400 descriptionThree">Decades of combined experience in product design and manufacture make us the ideal partner to undertake detailed mechanical design using the latest SOLIDWORKS design softwar.</p>
                                                                <p className="black fw-400 descriptionThree">In parallel with mechanical design, our engineers apply decades of experience in producing optimally designed PCB layout files using Pulsonix or Altium.</p>
                                                                <p className="black fw-400 descriptionThree">With leading-edge on-site PCB assembly equipment and 3D printing, we can easily produce fast turn-around prototypes for test and verification throughout the design process.</p>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link2">
                                                            <h1 className="black fw-500 titleThree mb-20">Electronics Design</h1>
                                                            <div className="mb-25">
                                                                <p className="black fw-400 descriptionThree">The engineering team at Corintech holds decades of experience in both analogue and digital electronics. Our engineers can provide peer review of existing designs through to complete custom circuit design.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Our capabilities include but are not restricted to</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">Processors</li>
                                                                    <li className="black fw-400 descriptionThree">ARM Cores</li>
                                                                    <li className="black fw-400 descriptionThree">Microchip PIC series</li>
                                                                    <li className="black fw-400 descriptionThree">Atmel AVR series</li>
                                                                    <li className="black fw-400 descriptionThree">Intel 8051</li>
                                                                    <li className="black fw-400 descriptionThree">STM8/32 series</li>
                                                                    <li className="black fw-400 descriptionThree">Sensor interface and signal conditioning</li>
                                                                    <li className="black fw-400 descriptionThree">Data acquisition</li>
                                                                    <li className="black fw-400 descriptionThree">Digital communications</li>
                                                                    <li className="black fw-400 descriptionThree">USB</li>
                                                                    <li className="black fw-400 descriptionThree">Ethernet</li>
                                                                    <li className="black fw-400 descriptionThree">SPI / i2c</li>
                                                                    <li className="black fw-400 descriptionThree">RS232</li>
                                                                    <li className="black fw-400 descriptionThree">RS485 / 422</li>
                                                                    <li className="black fw-400 descriptionThree">Modbus</li>
                                                                    <li className="black fw-400 descriptionThree">Profibus</li>
                                                                    <li className="black fw-400 descriptionThree">CAN bus</li>
                                                                    <li className="black fw-400 descriptionThree">Wireless communications</li>
                                                                    <li className="black fw-400 descriptionThree">WiFi</li>
                                                                    <li className="black fw-400 descriptionThree">Bluetooth</li>
                                                                    <li className="black fw-400 descriptionThree">NFC</li>
                                                                    <li className="black fw-400 descriptionThree">Cellular</li>
                                                                    <li className="black fw-400 descriptionThree">Sub 1GHz</li>
                                                                    <li className="black fw-400 descriptionThree">Our circuit design tools include:</li>
                                                                    <li className="black fw-400 descriptionThree">Pulsonix</li>
                                                                    <li className="black fw-400 descriptionThree">Altium</li>
                                                                    <li className="black fw-400 descriptionThree">Vutrax</li>
                                                                </ul>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link3">
                                                            <h1 className="black fw-500 titleThree mb-20">PCB Design Services</h1>
                                                            <p className="black fw-400 descriptionThree">Corintech’s electronic design team combines years of experience in different aspects of the electronics industry with industry-leading design software to offer expert high-quality, high speed, multi-layer printed circuit board design on a variety of substrates.</p>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Our Services Include:</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">Multi-layer</li>
                                                                    <li className="black fw-400 descriptionThree">High-frequency</li>
                                                                    <li className="black fw-400 descriptionThree">High-power</li>
                                                                </ul>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Substrates:</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">FR4</li>
                                                                    <li className="black fw-400 descriptionThree">Ceramic</li>
                                                                    <li className="black fw-400 descriptionThree">T-Clad</li>
                                                                    <li className="black fw-400 descriptionThree">Steel</li>
                                                                </ul>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Our design tools include:</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">Pulsonix</li>
                                                                    <li className="black fw-400 descriptionThree">Altium</li>
                                                                    <li className="black fw-400 descriptionThree">Vutrax</li>
                                                                </ul>
                                                            </div>
                                                            <p className="black fw-400 descriptionThree">We are happy to undertake PCB design from your pre-existing design data, peer review your PCB layouts, undertake modifications to your existing design and even create your product from scratch. Alongside our PCB layout services, we have over forty years’ experience in PCB assembly and continually invest in new hardware to maintain our strong reputation for delivering high-quality products.</p>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link4">
                                                            <h1 className="black fw-500 titleThree mb-20">Firmware Development</h1>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Our experienced team of firmware engineers provide embedded firmware development services across a wide range of processor platforms including (but not limited to):</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">ARM Cores</li>
                                                                    <li className="black fw-400 descriptionThree">Microchip PIC series</li>
                                                                    <li className="black fw-400 descriptionThree">Atmel AVR series</li>
                                                                    <li className="black fw-400 descriptionThree">Intel 8051</li>
                                                                    <li className="black fw-400 descriptionThree">STM8/32 series</li>
                                                                </ul>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Development tools:</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">Keil C Compiler</li>
                                                                    <li className="black fw-400 descriptionThree">Rowley Crossworks</li>
                                                                    <li className="black fw-400 descriptionThree">IAR Workbench</li>
                                                                    <li className="black fw-400 descriptionThree">Microchip MPLAB</li>
                                                                    <li className="black fw-400 descriptionThree">ST Visual Developer</li>
                                                                </ul>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">In-circuit emulation tools:</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">JTAG</li>
                                                                    <li className="black fw-400 descriptionThree">ST-Link</li>
                                                                    <li className="black fw-400 descriptionThree">Microchip MPLAB ICD</li>
                                                                </ul>
                                                            </div>
                                                            <p className="black fw-400 descriptionThree">Our embedded software engineers have hands-on experience with a wide range of embedded systems from consumer electronics to industrial automation, device drivers to flash memory and a wide range of operating systems, our engineers are in an ideal position for developing your custom firmware.</p>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link5">
                                                            <h1 className="black fw-500 titleThree mb-20">Software Development</h1>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">PC and Mobile Apps</h1>
                                                                <p className="black fw-400 descriptionThree">Our experienced team of developers provide services for PC software and mobile app development on Android and iOS. This, paired with our extensive experience in the design of intuitive graphical user interfaces makes us the perfect partner for creating applications to work closely with products.</p>
                                                                <p className="black fw-400 descriptionThree">For examples of our app work, see our standard product temperature data loggers that work with the EasyLog Cloud both online and on the iOS/Android app. The EasyLog Cloud app was developed by the team at Corintech and allows the user to view and export data from their wireless data logging sensors (designed and manufactured by Corintech) as well as adjust the settings in their devices.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Cloud-Based Applications</h1>
                                                                <p className="black fw-400 descriptionThree">We also offer services in developing cloud-based apps and platforms to work with your product. Harnessing the power of IoT, Cloud-based apps can offer users the ability to connect to and manage products remotely from any web browser. Our own EasyLog Cloud is an example of this, working with our standard data logging products it gives the user the ability to monitor and manage multiple devices in different locations completely remotely.</p>
                                                                <p className="black fw-400 descriptionThree">For information about our embedded firmware services services, please visit our Firmware Development page.</p>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link6">
                                                            <h1 className="black fw-500 titleThree mb-20">Product Design</h1>
                                                            <p className="black fw-400 descriptionThree">Our product design team is equally at home with a pencil or PC. Working closely with the customer, our services include concept development using hand sketches, storyboard presentations and 3D CAD rendered images. Our experience of 3D CAD software gives the ability to construct and validate complete product assemblies with confidence before committing to production tooling. This also enables us to provide 3D printed prototypes throughout the design process.</p>
                                                            <p className="black fw-400 descriptionThree">The close collaboration between our design team, electronics and production engineers starts at the very beginning of the process, meaning that all conceptual work is completed with an eye on what can realistically be taken through to detail design and final production.</p>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link7">
                                                            <h1 className="black fw-500 titleThree mb-20">3D CAD</h1>
                                                            <p className="black fw-400 descriptionThree">With extensive experience of the latest 3D CAD design software, our product design teams are ideally placed to take your project from concept to production-ready design. Our experience combined with leading-edge software tools, give the ability to construct and validate complete product assemblies with confidence before committing to production tooling. This also enables us to provide 3D printed prototypes throughout the design process.</p>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link8">
                                                            <h1 className="black fw-500 titleThree mb-20">Prototyping</h1>
                                                            <p className="black fw-400 descriptionThree">Thanks to our UK manufacturing facilities, we can produce rapid-turnaround examples of all aspects of a product not only at the design stages but throughout the development of the project for verification and sign-off should alternative components be needed.</p>
                                                            <p className="black fw-400 descriptionThree">With complete kits available we can turn-around PCB assembly prototypes within 48hrs. Review our latest PCB production plant here.</p>
                                                            <p className="black fw-400 descriptionThree">Using SLA technology, we can prototype mechanical designs using 3D printing to provide the customer with samples as early as possible.</p>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link9">
                                                            <h1 className="black fw-500 titleThree mb-20">Design for Manufacture</h1>
                                                            <p className="black fw-400 descriptionThree">A strong understanding of manufacturing processes is vital to ensure successful and timely design project outcomes, lowest-cost production and consistent high-quality products.</p>
                                                            <p className="black fw-400 descriptionThree">Corintech have spent the last 40 years designing and manufacturing all manner of electronic products. Our significant manufacturing expertise provides vital feedback into every stage of our design process.</p>
                                                            <p className="black fw-400 descriptionThree">Working with Corintech as your design and manufacturing partner offers confidence that, right from the concept stage, we have the final production in mind.</p>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link10">
                                                            <h1 className="black fw-500 titleThree mb-20">Product Compliance</h1>
                                                            <p className="black fw-400 descriptionThree">The team at Corintech have released electronic products to market for over 20 years. This experience ensures that we are the ideal electronic product design partner and can guide you through the often complex and expensive electronic product approvals process. We benefit by having an on-site EMC test chamber, allowing pre-approval compliance testing and often negating the need for repeated visits to an approved certifying test laboratory.</p>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Our experience includes:</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">Electromagnetic Compatibility</li>
                                                                    <li className="black fw-400 descriptionThree">Radio Equipment Directive</li>
                                                                    <li className="black fw-400 descriptionThree">Restriction of Hazardous Substances</li>
                                                                    <li className="black fw-400 descriptionThree">Low Voltage Directive</li>
                                                                    <li className="black fw-400 descriptionThree">Electromagnetic Fields Directive</li>
                                                                </ul>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link11">
                                                            <h1 className="black fw-500 titleThree mb-20">Wireless & IoT</h1>
                                                            <p className="black fw-400 descriptionThree">Corintech are leading specialists in the design and manufacture of Wireless & IoT products for a variety of different industries and applications. See our range of FilesThruTheAir™ products for examples of our work.</p>
                                                            <p className="black fw-400 descriptionThree">When incorporating wireless technology into a product, our expert design engineers can help you explore all possible opportunities and advise you on the option that will best suit your project's requirements.</p>
                                                            <p className="black fw-400 descriptionThree">Some of the most common wireless technologies that we can integrate into your product design include:</p>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Wi-Fi</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">Ideal for data-intensive applications due to fast data transfer.</li>
                                                                    <li className="black fw-400 descriptionThree">70m indoor signal range for most standard Wi-Fi routers.</li>
                                                                </ul>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Bluetooth</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">Ideal for short-range connectivity.</li>
                                                                    <li className="black fw-400 descriptionThree">Low power consumption options available (BLE).</li>
                                                                </ul>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">NFC</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">Ideal for short-range connectivity.</li>
                                                                </ul>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Cellular Networks</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">Generally ideal for applications which require a wide area of coverage.</li>
                                                                    <li className="black fw-400 descriptionThree">Different cellular networks have different potential for bandwidth.</li>
                                                                    <li className="black fw-400 descriptionThree">GSM, NB-IoT, LTE and Cat-M1 are common examples of cellular networks that we can incorporate into your product.</li>
                                                                </ul>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">LPWAN</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">(Low Power, Wide Area Network) Ideal for large-scale projects such as smart cities or smart farming.</li>
                                                                </ul>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Mesh Networks</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">Ideal for interconnected devices such as smart homes.</li>
                                                                    <li className="black fw-400 descriptionThree">Generally low power consumption.</li>
                                                                    <li className="black fw-400 descriptionThree">Varying capacity for data bandwidth. Common examples include Zigbee and Z-Wave.</li>
                                                                </ul>
                                                            </div>
                                                            <p className="black fw-400 descriptionThree">Selecting the right wireless technology for your product is pivotal to achieve desired product functionality, avoid obsolescence risks and access potential cost savings. For a full analysis of the most suitable wireless solution for your product and how we can help integrate this, we can conduct a feasibility study.</p>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link12">
                                                            <h1 className="black fw-500 titleThree mb-20">Display Technology</h1>
                                                            <p className="black fw-400 descriptionThree">If your electronics project includes the requirement for a display, Corintech are the ideal design partner. We have a long history in the design and supply of custom display technology, including TFT touchscreens, LCD, LED, e-paper, capacitive and resistive touchscreens along with chip-on-glass and chip-on-flex solutions.</p>
                                                            <p className="black fw-400 descriptionThree">We also provide a range of standard products including off the shelf display hardware with programmable software to fit your application perfectly. To find out more about these products and more, visit our standard products page.</p>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </div>
                                                <div className="col-lg-4 col-md-4">
                                                    <Nav variant="pills" className="flex-column">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link1">Product Development Process</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link2">Electronic Design</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link3">PCB Layout</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link4">Firmware Development</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link5">Software Development</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link6">Product Design</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link7">3D CAD</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link8">Prototyping</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link9">Design & Manufacture</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link10">Product Compliance</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link11">Wireless & IoT</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link12">Display Technology</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </div>
                                            </div>
                                        </Tab.Container>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </div>
                    </Tab.Container>
                </div>
            </div>
            {/* process section - end */}
            {/* footer - start */}
            <Footer />
            {/* footer - end */}
        </>
    )
}
export default Design;