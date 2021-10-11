import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

function TermsCondition(props) {
  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Terms & Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            rhoncus turpis.
            <br /> Mauris sagittis eleifend arcu, vitae pretium massa pharetra
            eu.{" "}
          </p>
        </div>
      </section>
      <section className="margin-top-3 margin-bottom-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="font-p text-just">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                aliquam lorem et sagittis laoreet. Morbi in sodales ante.
                Vivamus interdum dictum ante, vitae scelerisque velit egestas
                eget. Morbi ultricies tortor non dolor vehicula euismod id erat
                vitae, iaculis suscipit nulla. Etiam venenatis augue massa, nec
                dictum scelerisque velit egestas eget. Morbi ultricies tortor
                non dolor vehicula euismod id erat vitae, iaculis suscipit
                nulla. Etiam venenatis augue massa, nec dictum sapien suscipit
                sit amet. Curabitur sit amet tempus felis, ac ultrices libero.
                Duis dignissim aliquam mi quis feugiat.
                <br />
                <br />
                Sed in tempor odio. Nulla condimentum accumsan turpis nec
                feugiat. Vivamus nec molestie magna. Aliquam sit amet dictum
                augue, tempor mattis justo. Sed ultricies sapien imperdiet
                venenatis varius. Sed quam odio, aliquet eu dapibus ut,
                scelerisque eget tellus. Nullam euismod condimentum tincidunt.
                <br />
                <br />
                1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris aliquam lorem et sagittis laoreet. 2 Morbi in sodales
                ante. Vivamus interdum dictum ante, vitae scelerisque velit
                egestas eget. Morbi ultricies tortor non dolor vehicula euismod
                id erat vitae, . iaculis suscipit nulla. <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                varius libero turpis, at lacinia ex maximus nec. Nunc velit
                lorem, gravida non ex eu, consequat suscipit ex. Vivamus
                faucibus mauris eu nunc vulputate venenatis. Nullam lacinia orci
                nulla, eu fermentum nibh pretium ut. Sed nunc turpis, blandit et
                egestas ut, efficitur volutpat nunc. Integer malesuada ipsum et
                mollis eleifend. Nam lacinia metus maximus, pulvinar velit nec,
                suscipit ipsum. Cras vel massa tempor, commodo nibh quis, mattis
                orci. Phasellus nec tristique ante. Nullam quis ipsum rhoncus
                justo convallis facilisis sed nec tortor.
                <br />
                <br />
                Quisque dictum magna sit amet nibh eleifend ornare. Aenean sed
                enim at neque cursus interdum eget quis arcu. Cras et aliquet
                nisi. Duis nec felis finibus, finibus erat at, sollicitudin
                elit. Aliquam quis ullamcorper arcu, sed laoreet odio. Duis arcu
                dolor, tincidunt eget est nec, vehicula ullamcorper risus.
                Pellentesque non dui in diam maximus ultricies quis et nunc.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                aliquam lorem et sagittis laoreet. Morbi in sodales ante.
                Vivamus interdum dictum ante, vitae scelerisque velit egestas
                eget. Morbi ultricies tortor non dolor vehicula euismod id erat
                vitae, iaculis suscipit nulla. Etiam venenatis augue massa, nec
                dictum scelerisque velit egestas eget. Morbi ultricies tortor
                non dolor vehicula euismod id erat vitae, iaculis suscipit
                nulla. Etiam venenatis augue massa, nec dictum sapien suscipit
                sit amet. Curabitur sit amet tempus felis, ac ultrices libero.
                Duis dignissim aliquam mi quis feugiat.
                <br />
                <br />
                Sed in tempor odio. Nulla condimentum accumsan turpis nec
                feugiat. Vivamus nec molestie magna. Aliquam sit amet dictum
                augue, tempor mattis justo. Sed ultricies sapien imperdiet
                venenatis varius. Sed quam odio, aliquet eu dapibus ut,
                scelerisque eget tellus. Nullam euismod condimentum tincidunt.
                <br />
                <br />
                1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris aliquam lorem et sagittis laoreet. 2 Morbi in sodales
                ante. Vivamus interdum dictum ante, vitae scelerisque velit
                egestas eget. Morbi ultricies tortor non dolor vehicula euismod
                id erat vitae, . iaculis suscipit nulla. <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                varius libero turpis, at lacinia ex maximus nec. Nunc velit
                lorem, gravida non ex eu, consequat suscipit ex. Vivamus
                faucibus mauris eu nunc vulputate venenatis. Nullam lacinia orci
                nulla, eu fermentum nibh pretium ut. Sed nunc turpis, blandit et
                egestas ut, efficitur volutpat nunc. Integer malesuada ipsum et
                mollis eleifend. Nam lacinia metus maximus, pulvinar velit nec,
                suscipit ipsum. Cras vel massa tempor, commodo nibh quis, mattis
                orci. Phasellus nec tristique ante. Nullam quis ipsum rhoncus
                justo convallis facilisis sed nec tortor.
                <br />
                <br />
                Quisque dictum magna sit amet nibh eleifend ornare. Aenean sed
                enim at neque cursus interdum eget quis arcu. Cras et aliquet
                nisi. Duis nec felis finibus, finibus erat at, sollicitudin
                elit. Aliquam quis ullamcorper arcu, sed laoreet odio. Duis arcu
                dolor, tincidunt eget est nec, vehicula ullamcorper risus.
                Pellentesque non dui in diam maximus ultricies quis et nunc.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TermsCondition;
