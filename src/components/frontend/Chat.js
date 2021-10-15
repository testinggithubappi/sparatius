import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";
import ChatInner from "../modules/ChatInner";
import { API_KEY } from "../../config";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function Chat(props) {
  const [onProviderSessionline, setProviderSession] = React.useState({
    ProviderData: "",
    sessionId: "",
    token: "",
  });

  const [chatHeadList, setchatHeadList] = React.useState([]);

  useEffect(async () => {
    await getProviderSession();
    await loadChatHead();
  }, []);

  const getProviderSession = async () => {
    try {
      let path = `/api/create_chathead`;
      var data = {
        id: props.match.params.id,
      };
      let response = await axios.post(path, data).then((data) => data);
      response = await response.data.data;
      console.log(response);
      setProviderSession({
        ...onProviderSessionline,
        ProviderData: response,
        sessionId: response.session_id,
        token: response.token,
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const loadChatHead = async () => {
    try {
      let path = `/api/get_chathead`;
      let response = await axios.post(path).then((data) => data);
      response = await response.data.data;
      console.log(response);
      setchatHeadList(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log(onProviderSessionline.sessionId);
  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Chat</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            rhoncus turpis.
            <br /> Mauris sagittis eleifend arcu, vitae pretium massa pharetra
            eu.{" "}
          </p>
        </div>
      </section>
      <div className="container">
        {onProviderSessionline.sessionId && onProviderSessionline.token ? (
          <ChatInner
            currentchatID={props.match.params.id}
            chatHeadlist={chatHeadList}
            apiKey={API_KEY}
            sessionId={onProviderSessionline.sessionId}
            token={onProviderSessionline.token}
          />
        ) : (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={200}
            timeout={3000} //3 secs
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Chat;
