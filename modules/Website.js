import React from 'react'
import { Hero, Page, Navbar, NavItem } from 'neal-react'
import { Link } from 'react-router'

const Website = React.createClass({
    render() {
        const brandName = "Milk For You!"
        const brand = <span>
            {brandName}
        </span>
        return (
            <Page>
                <Navbar brand={brand}>
                    <NavItem>
                        <Link to="Home" className="nav-link">
                            Home
                        </Link>
                    </NavItem>
                </Navbar>
                <Hero backgroundImage="img/hero-bg-01.jpg" className="text-xs-center">
                    <h1 className="display-4">
                        What determines your milk buying decisions?
                    </h1>
                    <p className="lead">
                        Help us in our research on what factors customers consider when buying milk
                    </p>
                    <p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScQ51ufGeyKCFPDA7Wz3OtkCM8nnANqnfANxs6SXHTWRmlG1w/viewform" target="_blank" className="btn btn-white">
                            Take the Survey
                        </a>
                    </p>
                </Hero>
            </Page>
        )
    }
})

module.exports = {
    Website: Website,
}
