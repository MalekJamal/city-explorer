import React, { Component } from "react";
import { MDBFooter } from "mdb-react-ui-kit";
class Footer extends Component {
  render() {
    return (
      <div>
        <MDBFooter bgColor="dark" className="text-center text-lg-left">
          <div
            className="text-center p-3 text-light"
            
            style={{ backgroundColor: "#000",
                        position: "fixed",
                        left: 0,
                        bottom: 1,
                        right: 0,
                        paddingTop:"50px"
                        
                    }}
          >
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a className="text-light" href="#">
              Malek Hamdan
            </a>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default Footer;
