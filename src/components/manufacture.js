import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Tab, Nav } from 'react-bootstrap';
import Navigation from "./nav";
import Footer from "./footer";
import serviceSecOneImg from "../assets/img/serviceSecOneImg.svg";
const Manufacture = () => {
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
                                <h1 className="titleOne fw-600 black-232323">Electronic Manufacture</h1>
                                <p className="description fw-400 black-272727 mb-25">Corechiptech benefits from electronics manufacturing facilities in both the UK and the Far East. This enables us to offer small batch or high volume production as well as full test, QA and supply chain solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero section - end */}
            {/* process section - start */}
            <div className="container-fluid serviceSecTwo py-50" id="serviceSecTwo">
                <div className="container">
                    <Tab.Container id="horizontal-tab" defaultActiveKey="manufacture">
                        <div className="row row-gap">
                            <div className="col-lg-12 col-md-12">
                                <Tab.Content>
                                    <Tab.Pane eventKey="manufacture">
                                        <Tab.Container id="vertical-design-tabs" defaultActiveKey="v-pills-link-m1">
                                            <div className="row row-gap">
                                                <div className="col-lg-8 col-md-8">
                                                    <Tab.Content className="bgColor-F3F5F7 p-20 br-15">
                                                        <Tab.Pane eventKey="v-pills-link-m1">
                                                            <h1 className="black fw-500 titleThree mb-20">Component Sourcing</h1>
                                                            <p className="black fw-400 descriptionThree">With over 40 years’ experience in electronics manufacturing, we know how to utilise our procurement capabilities to best suit our customers’ unique project needs.</p>
                                                            <p className="black fw-400 descriptionThree">Our team will collaborate closely with our customers. We can take full management of the procurement process, work to specific requirements, or work with components free-issued by our customers themselves.</p>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Global Procurement and Low-Cost Sourcing</h1>
                                                                <p className="black fw-400 descriptionThree">We understand that low-cost component sourcing is fundamental to offering our customers the lowest possible cost to manufacture. Using our global purchasing teams in the UK, the Far East and the USA, we are able to obtain the lowest prices in the global marketplace. Our global network of suppliers also enables us to track down components that are often hard to source.</p>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link-m2">
                                                            <h1 className="black fw-500 titleThree mb-20">PCB Assembly</h1>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Our Services</h1>
                                                                <p className="black fw-400 descriptionThree">At Corintech, we pride ourselves on our high quality and competitive PCB assembly services. With over 40 years of experience, our strengths lie in achieving the lowest cost possible for the highest level of quality and prompt delivery to a wide range of customers. Our services take your project from design to production and every stage in between, including PCB design, component procurement, mixed assembly and functional testing. We remain on the cutting edge of technology by continually investing in industry leading mounting tools and AOI machinery.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Our specialisms include:</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">Pick and place of surface mount components down to 01005 and uBGAs</li>
                                                                    <li className="black fw-400 descriptionThree">Conventional through-hole soldering</li>
                                                                    <li className="black fw-400 descriptionThree">FR4, T-clad, steel and ceramic substrates</li>
                                                                    <li className="black fw-400 descriptionThree">Serialisation and barcoding</li>
                                                                    <li className="black fw-400 descriptionThree">Conformal coating and encapsulation</li>
                                                                    <li className="black fw-400 descriptionThree">ISO9001 accreditation</li>
                                                                    <li className="black fw-400 descriptionThree">All workmanship carried out to IPC J-STD</li>
                                                                    <li className="black fw-400 descriptionThree">All inspections carried out to IPC-A-610</li>
                                                                </ul>
                                                                <p className="black fw-400 descriptionThree">We use both conventional PCB assembly and Surface Mount Technology (SMT) component placement systems, ensuring we are industry-leading through our continual investment in the latest machinery:</p>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">Solder Paste Printing - Europlacer SP710avi</li>
                                                                    <li className="black fw-400 descriptionThree">SMT Pick-and-Place - Europlacer Iineo 1</li>
                                                                    <li className="black fw-400 descriptionThree">QR coded smart reel system</li>
                                                                    <li className="black fw-400 descriptionThree">Reflow – TSM 70-i71 8 zones (7 heating, 1 cooling)</li>
                                                                    <li className="black fw-400 descriptionThree">Selective Soldering - Smartflow 2020</li>
                                                                    <li className="black fw-400 descriptionThree">3D AOI – CyberOptics SQ3000</li>
                                                                </ul>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Getting a Quote</h1>
                                                                <p className="black fw-400 descriptionThree">Our process starts with the customer sending through an RFQ pack containing Gerber files, Bill of Materials and PCB Spec alongside any additional info, such as a test specification. Then, our production engineering team studies the documentation for any discrepancies before our purchasing experts quote for the PCB and components and our production planner adds lead time and labour costs. With this information, our sales team issues the quote to the customer stating price, lead time and any component alternatives.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Our Process</h1>
                                                                <p className="black fw-400 descriptionThree">After receiving an order, the first step is to raise a sales order and complete our in-house checklist to ensure all provided documentation is correct. Our production engineering team then review all documentation to double check it is correct regarding details like issue numbers, part numbers and more. Once this is complete, our purchasing team begin procuring components. At Corintech, traceability is key and due to the systems we have in place, all components are traceable down to batch and board level. Once all components are at the production line, we send an acknowledged shipping date to the customer to meet the delivery time we quoted. Once assembled, all builds are inspected by our state-of-the-art 3D AOI Inspection system as well as being visually checked by our IPC-A-610 trained quality engineers. We are able to offer flexible supply options including Kanban supply to support your Lean Manufacturing system, and we have the capacity to hold stock of components and final assembly.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Our Customers</h1>
                                                                <p className="black fw-400 descriptionThree">Our customer network is made up of a range of industries and business sizes that all value a high quality and reliable PCB assembly manufacturer. We work with many sectors including aerospace, medical, industrial, oil and gas, energy, automotive and more. In fact, the flexibility of our printed circuit board assembly services (including both small and large batch and fast turnaround options) means we're able to cater to a vast range of customers.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Our Benefits</h1>
                                                                <p className="black fw-400 descriptionThree">Corintech provides small batch or high volume production as well as full functional testing, quality assurance and global component sourcing options. With manufacturing facilities in the UK and Far East, we offer competitive pricing across all our PCB manufacturing services. Our continual investment in the latest technology including solder paste printing, pick-and-place and selective-soldering, means we can offer fast turnaround services and maintain short lead-times.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Our Quality Control Measures</h1>
                                                                <p className="black fw-400 descriptionThree">Quality has always been of paramount importance at Corintech. We deliver all products in accordance with our ISO9001 accreditation. Our PCB assembly quality processes mean we are able to identify potential issues at the earliest opportunity through quality experts performing visual inspection and circuit testing as well as all builds passing through our state-of-the-art automated optical inspection machinery. All products at Corintech are manufactured to J-STD-001 workmanship standards and inspected in accordance with IPC-A-610 quality classifications.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">PCB Layout Services</h1>
                                                                <p className="black fw-400 descriptionThree">Alongside PCB assembly, our engineering team combines years of experience in the electronics industry with leading software to offer multi-layer PCB design and layout services.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Request a Quote</h1>
                                                                <p className="black fw-400 descriptionThree">If you would like to receive a PCB assembly quote for your project, simply send us your Bill of Materials (BOM) and PCB data for a quote. You can do this by simply emailing info@corechiptech.com.</p>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link-m3">
                                                            <h1 className="black fw-500 titleThree mb-20">Electronic Box Build</h1>
                                                            <p className="black fw-400 descriptionThree">We like to be as flexible as possible to our customer’s needs. As such, we can extend our manufacturing beyond electronic components, to provide full product assembly. Products can be supplied in bulk, or fully packaged ready to ship to your customers.</p>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Our box build services utilise capabilities from both our UK-based manufacturing and our Far East manufacturing, including:</h1>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">Injection moulded parts</li>
                                                                    <li className="black fw-400 descriptionThree">Machined parts</li>
                                                                    <li className="black fw-400 descriptionThree">Sheet metal parts and panels</li>
                                                                    <li className="black fw-400 descriptionThree">Cable assemblies</li>
                                                                    <li className="black fw-400 descriptionThree">Full product assembly</li>
                                                                    <li className="black fw-400 descriptionThree">Product packaging</li>
                                                                    <li className="black fw-400 descriptionThree">Stock-holding</li>
                                                                    <li className="black fw-400 descriptionThree">Flexible supply</li>
                                                                </ul>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Benefits of Box Build Services – Why we’re the perfect partner for your product assembly:</h1>
                                                                <p className="black fw-400 descriptionThree">Enlisting our full product assembly services can have a variety of benefits for our customers.</p>
                                                                <p className="black fw-400 descriptionThree">Firstly, our box build service provides you with a major simplification of your supply chain. Rather than handling the logistics involved in procuring components and services from many different suppliers, why not streamline this process by producing one purchase order for one box build contractor? This can save your business vast amounts of time and resource in researching suppliers, employing their services and producing documentation.</p>
                                                                <p className="black fw-400 descriptionThree">In addition to this, our component sourcing capabilities are global. This allows us to source the lowest prices on the market and track down components that can otherwise be difficult to source. We operate a fully-traceable procurement process, which means that all components sourced are from trusted and reliable suppliers. Therefore, our box build customers benefit from low-cost and reliable end products.</p>
                                                                <p className="black fw-400 descriptionThree">If your business is short of storage space, our box build services can include use of our storage facilities and flexible supply to help optimise your capacity utilisation.</p>
                                                                <p className="black fw-400 descriptionThree">Our ISO9001 quality accreditations apply across all of our processes. This means that a full product assembly with Corintech will guarantee your product is manufactured to a our strict quality standards.</p>
                                                                <p className="black fw-400 descriptionThree">Finally, we have a skilled customer support team, who are able to provide tailored and bespoke support services throughout the entire manufacturing process. This ensures that we can be as flexible as possible to your project’s unique needs.</p>
                                                            </div>
                                                            <h1 className="black fw-500 descriptionTwo">Contact our customer support team to discuss how our box build services can best suit your project.</h1>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link-m4">
                                                            <h1 className="black fw-500 titleThree mb-20">Flexible Supply</h1>
                                                            <p className="black fw-400 descriptionThree">Corintech aim to meet your electronics supply requirements seamlessly. Our customer support team can collaborate with you to arrange supply that can best suits your business operations. Flexibility is core to our business. As such, we offer supply options specifically-designed to suit common business practises such as lean production.</p>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Lean Production</h1>
                                                                <p className="black fw-400 descriptionThree">We are able to compliment your just-in-time, Kanban and similar lean production systems with our own comprehensive resource planning. These systems are designed to optimise inventory replenishment, minimising work-in-progress, surplus stock and potential waste.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Storage Options</h1>
                                                                <p className="black fw-400 descriptionThree">Both our UK and Far East facilities have storage space available for components and final assemblies. See our box build services to see how we can coordinate our manufacturing and storage services to provide you with fully-packaged goods, ready to ship to your customers.</p>
                                                                <p className="black fw-400 descriptionThree">Our UK and Hong Kong warehousing facilities can be used to open up global distribution opportunities, or simplify the logistics of your current distribution network.</p>
                                                            </div>
                                                            <h1 className="fw-500 black descriptionTwo">We want to provide ultimate flexibility to your business needs, so contact our customer support team now to discuss how our supply options can best enhance the efficiency of your business operations.</h1>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link-m5">
                                                            <h1 className="black fw-500 titleThree mb-20">Wire Bonding</h1>
                                                            <p className="black fw-400 descriptionThree">Wire bonding is used to electrically interconnect an integrated circuit, or any other semiconductor device, to a compatible metallic surface. A length of small-diameter, soft metal wire is used to make the link, and the bond is created by applying force and ultrasonic vibration. Finished circuits are normally protected with epoxy encapsulation.</p>
                                                            <p className="black fw-400 descriptionThree">Chip-on-board wire bonding is a core part of Corintech’s assembly capabilities, with gold and aluminium wire bonding machines available on-site in the UK and the Far East. These give us the capability to work with wire diameters as low as 15 microns for aluminium wire and 25 microns for gold wire.</p>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Cutting-Edge Machinery</h1>
                                                                <p className="black fw-400 descriptionThree">Our UK site houses two powerful pieces of wire bonding machinery:</p>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">ASM AB350 Automatic Wire Bonder</li>
                                                                    <li className="black fw-400 descriptionThree">K&S 1419 Gold Automatic Wire Bonder</li>
                                                                </ul>
                                                                <p className="black fw-400 descriptionThree">These allow us to be extremely flexible to our customers’ needs, offering aluminium or gold wire bonding options, as well as a range of bonding techniques (including ball and wedge) to maximise their product efficiency.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Ball Bonding</h1>
                                                                <p className="black fw-400 descriptionThree">Using our ASM Automatic Wire Ball Bonder, we are able to provide ball bonding solutions for a variety of substrates. Ball bonding techniques allow for the production of more complex wire loops, potentially improving your design efficiency. This machinery’s advanced features and intelligent interface facilitates precision fine pitch bonding with rapid turnaround.</p>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">Higher numbers of inputs and outputs</li>
                                                                    <li className="black fw-400 descriptionThree">Reduced costs from smaller size (less materials required)</li>
                                                                    <li className="black fw-400 descriptionThree">Smaller and lighter final product</li>
                                                                    <li className="black fw-400 descriptionThree">Increased wafer output</li>
                                                                    <li className="black fw-400 descriptionThree">Potentially improved electrical performance</li>
                                                                </ul>
                                                            </div>
                                                            <h1 className="black fw-500 descriptiontwo">Contact our team today if you want to discuss potential wire bonding enhancements for your product design, or you want your electronics manufacturing carried out to a higher level of quality.</h1>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link-m6">
                                                            <h1 className="black fw-500 titleThree mb-20">Thick Film Hybrid Circuit Boards</h1>
                                                            <p className="black fw-400 descriptionThree">Corintech has been a leading specialist in the design and manufacture of thick film circuit board microelectronic assemblies since 1977.</p>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">What Are Thick Film Circuit Boards?</h1>
                                                                <p className="black fw-400 descriptionThree">Thick film hybrid circuits are made using a print & fire (P+F) technique. This involves a combination of multi-layer screen printing of precious and semi-precious metals (Au, Ag, Pd), as well as the firing of tracks and precision resistors onto a range of ceramic and metal substrates. Surface mount components and bare die components with wire bonding can also be incorporated, and optional full encapsulation provides greater environmental protection. The use of different pastes allows the production of conductive tracks as well as resistors, which can be custom specified and then laser-trimmed to a high level of accuracy, offering an exact choice of value so that no compromise in design is necessary.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">What Are Thick Film Hybrids Used For?</h1>
                                                                <p className="black fw-400 descriptionThree">Thick Film Hybrids are ideal for environments where a high level of reliability is needed as they can withstand a much wider temperature range and have higher durability than conventional PCB assemblies.</p>
                                                                <p className="black fw-400 descriptionThree">Thick Film technology is used extensively in aerospace, defence and automotive applications. However, its durable and reliable nature is starting to appeal to a broader market. As an experienced company in this technology, we are the perfect partner to develop and manufacture thick film circuit boards to suit any application.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">What Are The Benefits Of Thick Film Hybrids?</h1>
                                                                <p className="black fw-400 descriptionThree">Ceramic substrates provide a number of key advantages over standard FR4 based PCBs. One of the primary advantages is their thermal conductivity. For example, Aluminium Oxide (Alumina) offers an increase in thermal conductivity of approximately 20 times that of FR4, and Aluminium Nitride offers an increase of approximately 100 times.</p>
                                                                <p className="black fw-400 descriptionThree">Another advantage of ceramic substrates is that they offer extremely low thermal expansion properties. This makes them ideal for use in harsh environments where extremes of temperature are likely. The combination of low thermal expansion and high thermal conductivity ensures that not only is thermal expansion limited, but it is also evenly spread across the board, limiting the possibility that large amounts of stress will be exerted in specific areas.</p>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Key Benefits:</h1>
                                                                <p className="black fw-400 descriptionThree">Ceramic substrates provide a number of key advantages over standard FR4 based PCBs. One of the primary advantages is their thermal conductivity. For example, Aluminium Oxide (Alumina) offers an increase in thermal conductivity of approximately 20 times that of FR4, and Aluminium Nitride offers an increase of approximately 100 times.</p>
                                                                <p className="black fw-400 descriptionThree">Another advantage of ceramic substrates is that they offer extremely low thermal expansion properties. This makes them ideal for use in harsh environments where extremes of temperature are likely. The combination of low thermal expansion and high thermal conductivity ensures that not only is thermal expansion limited, but it is also evenly spread across the board, limiting the possibility that large amounts of stress will be exerted in specific areas.</p>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">High reliability for harsh environments</li>
                                                                    <li className="black fw-400 descriptionThree">Flexibility to choose precise resistor values with active laser trimming</li>
                                                                    <li className="black fw-400 descriptionThree">High voltage resistors</li>
                                                                    <li className="black fw-400 descriptionThree">Extended temperature range performance</li>
                                                                    <li className="black fw-400 descriptionThree">Improved thermal management</li>
                                                                    <li className="black fw-400 descriptionThree">Excellent high-frequency performance</li>
                                                                    <li className="black fw-400 descriptionThree">Low start-up costs</li>
                                                                    <li className="black fw-400 descriptionThree">Fast lead time to prototype</li>
                                                                </ul>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">What Substrates Can Be Used?</h1>
                                                                <p className="black fw-400 descriptionThree">At Corintech, we are able to print circuits on the following substrates:</p>
                                                                <ul>
                                                                    <li className="black fw-400 descriptionThree">ADS-96R</li>
                                                                    <li className="black fw-400 descriptionThree">ADS-996R</li>
                                                                    <li className="black fw-400 descriptionThree">ADOS-90R</li>
                                                                    <li className="black fw-400 descriptionThree">All Alumina</li>
                                                                    <li className="black fw-400 descriptionThree">Aluminium Nitride</li>
                                                                    <li className="black fw-400 descriptionThree">Quartz Substrates</li>
                                                                    <li className="black fw-400 descriptionThree">Stainless Steel</li>
                                                                </ul>
                                                            </div>
                                                            <h1 className="black fw-500 descriptionTwo">Each substrate possesses unique properties, making them suitable for specific purposes. Contact our design team to discuss how you can best utilise thick film technology in your designs.</h1>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link-m7">
                                                            <h1 className="black fw-500 titleThree mb-20">Laser Trimming</h1>
                                                            <p className="black fw-400 descriptionThree">Through the use of printed resistors, thick film hybrids offer extremely precise resistor values. Once printed, the resistor tracks can be laser trimmed to an exact value which offers much greater accuracy and choice of value over standard surface mounted resistors. We are also able to work with laser trimmable surface mount resistors on standard PCBs. We can calibrate resistor values under active or passive conditions. Depending on resistor value we can achieve tolerances up to +/-0.05%.</p>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link-m8">
                                                            <h1 className="black fw-500 titleThree mb-20">Coating and Encapsulation</h1>
                                                            <p className="black fw-400 descriptionThree">Electronics assemblies are coated or potted for a variety of reasons including product safety, environmental protection and improved performance.</p>
                                                            <p className="black fw-400 descriptionThree">In extreme environments, where reliability is critical, conditions such as heat, moisture and shock can inhibit the performance of electronic components, or even cause permanent damage. As such, conformal coating and encapsulation are often used to improve reliability in harsh environmental applications such as aerospace, automotive and defence.</p>
                                                            <p className="black fw-400 descriptionThree">We use a state-of-the-art PVA Delta 6 robotic system for coating and encapsulation services, which enables us to offer a variety of flexible coating options.</p>
                                                            <ul>
                                                                <li className="black fw-400 descriptionThree">Conformal Coating</li>
                                                                <li className="black fw-400 descriptionThree">Encapsulation</li>
                                                                <li className="black fw-400 descriptionThree">Potting</li>
                                                                <li className="black fw-400 descriptionThree">Beading</li>
                                                            </ul>
                                                            <p className="black fw-400 descriptionThree">Each different technique, combined with a specially-selected chemical substance, will offer unique properties and enhancements for your electronics assembly.</p>
                                                            <div className="mb-20">
                                                                <h1 className="black fw-500 descriptionTwo">Potential enhancements can include:</h1>
                                                                <li className="black fw-400 descriptionThree">Moisture resistance (potential to make components fully-waterproof)</li>
                                                                <li className="black fw-400 descriptionThree">Reduced electrostatic attraction of dust</li>
                                                                <li className="black fw-400 descriptionThree">Flame retardant properties</li>
                                                                <li className="black fw-400 descriptionThree">Resistance to shock and vibration</li>
                                                                <li className="black fw-400 descriptionThree">Improved heat dissipation</li>
                                                                <li className="black fw-400 descriptionThree">UV protection</li>
                                                                <li className="black fw-400 descriptionThree">Protection from harsh chemicals</li>
                                                                <li className="black fw-400 descriptionThree">Electrical insulation</li>
                                                                <p className="black fw-400 descriptionThree">We aim to be as flexible as possible to our customers’ needs. As a result, we collaborate to consider a range of different coating types and techniques that can best-suit your unique application.</p>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link-m9">
                                                            <h1 className="black fw-500 titleThree mb-20">Production Engineering</h1>
                                                            <p className="black fw-400 descriptionThree">Corintech's production engineers add value to the manufacturing services we offer in a number of different ways. Customer design files and bills of material are carefully reviewed; component obsolescence issues are monitored, alternatives are recommended and detailed build standards are generated to ensure that all production processes are carefully controlled.</p>
                                                            <p className="black fw-400 descriptionThree">Our production engineering team can also design bespoke functional test equipment to ensure that your product is manufactured to the highest possible quality.</p>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link-m10">
                                                            <h1 className="black fw-500 titleThree mb-20">Quality Accreditations</h1>
                                                            <p className="black fw-400 descriptionThree">Quality is of paramount importance at Corintech, and we proudly deliver products in accordance with our ISO9001 accreditation. Our quality processes ensure that we can identify potential issues at the earliest opportunity, allowing efficient action to be taken.</p>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Our Quality Goal</h1>
                                                                <p className="black fw-400 descriptionThree">Our goal is to provide high-quality products on-time and in-full.</p>
                                                                <h1 className="fw-400 primaryColor headerText">
                                                                    "Quality and on-time delivery of products sit at the forefront of Corintech’s strategy. Using a structured, process approach, we ensure our quality management system continually monitors and improves our processes and procedures throughout the organisation. With full support from all departments, we are able to provide world-class quality products on time, in full."
                                                                    - Jack Dayeh (Operations Manager)
                                                                </h1>
                                                            </div>
                                                            <div className="mb-25">
                                                                <h1 className="black fw-500 descriptionTwo">Continuous Improvement</h1>
                                                                <p className="black fw-400 descriptionThree">Constant checks, audits and provisions are in place to monitor Corintech’s accreditations. As such, we are continuously improving our processes and services to best benefit our customers. For example, any issues relevant to quality must be immediately reported and documented, including an evaluation of steps taken to rectify the issue and prevent future occurrences.</p>
                                                                <p className="black fw-400 descriptionThree">We are also continuously investing in the latest technology to best progress our quality management systems. Currently, our state-of-the-art automated optical inspection machinery (AOI) and trained experts meticulously examine components and finished products. All products are manufactured to J-STD-001 workmanship standards and inspected in accordance with IPC-A-610 quality classifications.</p>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link-m11">
                                                            <h1 className="black fw-500 titleThree mb-20">UK Electronics Assembly</h1>
                                                            <p className="black fw-400 descriptionThree">Our UK headquarters in the New Forest, Hampshire, can provide close-to-home electronic manufacturing for fast turnaround of prototype PCB assemblies, as well as low and high volume batches. We encourage regular project reviews and welcome face-to-face visits; it helps us to understand your needs and exceed your expectations.</p>
                                                            <p className="black fw-400 descriptionThree">Many of our customers value a simple, local supply chain over complex global logistics. With the ability to hold meetings and offer engineering support, using a local supplier simplifies communications and ensures that you receive a personal customer service experience.</p>
                                                            <p className="black fw-400 descriptionThree">Furthermore, our UK based procurement, manufacturing, and test teams provide tight control over products with specific security requirements as well as ensuring batch and board-level traceability on all components used in the manufacturing process. Corintech can also keep buffer stock for you, meaning we can ship to a call off for next day delivery so that you will not run out of stock even if unexpected spikes in demand occur.</p>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="v-pills-link-m12">
                                                            <h1 className="black fw-500 titleThree mb-20">Far East Manufacturing</h1>
                                                            <p className="black fw-400 descriptionThree">Corintech’s Hong Kong site manages our Far East, high-volume electronics manufacturing and quality control, while our purchasing and logistics teams ensure we attain the lowest prices possible and consistent on-time delivery for our clients.</p>
                                                            <p className="black fw-400 descriptionThree">Your point of contact remains local with a dedicated UK accounts holder on hand to manage your orders and stock levels.</p>
                                                            <p className="black fw-400 descriptionThree">Our dedicated quality team in the Hong Kong office is trained to IPC 610 class 3 inspection standards, meaning we can maintain the same quality processes throughout the supply chain with vigorous QA inspections at each stage. Through our established relationships and regular auditing practices with our Far Eastern suppliers, we ensure all components used are of the highest quality and come with full traceability. These combined elements of our expertise mean you can take advantage of Far Eastern high-volume and low source-cost production without complexity or compromising on quality and service.</p>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </div>
                                                <div className="col-lg-4 col-md-4">
                                                    <Nav variant="pills" className="flex-column">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link-m1">Component Sourcing</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link-m2">PCB Assembly</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link-m3">Box Build</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link-m4">Flexible Supply</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link-m5">Wire Bonding</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link-m6">Thick Film Hybrids</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link-m7">Laser Trimming</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link-m8">Coating and Encapsulation</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link-m9">Production Engineering</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link-m10">Quality Accreditations</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link-m11">UK Electronics Assembly</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="v-pills-link-m12">Far East Manufacturing</Nav.Link>
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
export default Manufacture;