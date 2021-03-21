import React, { Component } from "react";
import "./style.css"

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <div class="navbar">
            <div class="logo">
                <a href="#">Jobware</a>
            </div>
            <div class="navbar_items">
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#services">jobs</a></li>
                    <li><a href="#contactus">contact</a></li>
                    <li><a href="#ourteam">our team</a></li>
                </ul>
            </div>

        </div>
        
        <div class="banner_image">
            <div class="banner_content">
                <h1>Join us!<br></br> <span>Let us "build" a job for you.</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, neque.</p>
            </div>	
        </div>
        <div class="about">
            <h1 class="title">About Us</h1>
            <p>The organization of the Chief Labour Commissioner(Central) also known as Central Industrial Relations Machinery is an apex organization in the country responsible for maintaining harmonious industrial relations mainly in the sphere of central Government. In pursuance of the recommendation of the Royal Commission on Labour in India, the organization was set up in April, 1945 by combining the former organizations of the conciliation Officer (Railways), Supervisor of Railway Labour and the Labour Welfare Advisor.</p>
		<div class="btn"><a href="#">Learn More</a></div>
        </div>

        <div class="jobs">
            <h1 class="title">Jobs</h1>
		    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam quia, porro repellendus dolore repudiandae, accusantium corporis harum vel iste suscipit maiores provident ullam itaque libero minus nesciunt consequatur iusto numquam asperiores quod fugiat veniam blanditiis.</p>
		<div class="diff_services">
			<div class="diff_services_item">
				<img src="images/driver.jpg" alt="service_image"/>
				<h3 class="sub_title">Driver</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</div>
			<div class="diff_services_item">
				<img src="images/cook.jpg" alt="service_image"/>
				<h3 class="sub_title">Maid</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</div>
			<div class="diff_services_item">
				<img src="images/services-3.png" alt="service_image"/>
				<h3 class="sub_title">Dog walker</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</div>
		</div>

        

        </div>

        <div class="contactus" id="contactus">
            <h1 class="title">contact us</h1>
            <div class="form_wrapper">
                <div class="form_input">
                    <input type="text" placeholder="Email"/>
                </div>
                <div class="form_input">
                    <input type="text" placeholder="Subject"/>
                </div>
                <div class="form_input">
                    <textarea placeholder="Message"></textarea>
                </div>
                <div class="btn">
                    <a href="#">Submit</a>
                </div>
            </div>
        </div>
        <div class="footer">
            <a href="#">© 2021 Jobware</a>
        </div>
        </div>
        );
    }
}
export default Home;