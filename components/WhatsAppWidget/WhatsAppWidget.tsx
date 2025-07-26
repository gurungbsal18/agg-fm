"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function WhatsAppWidget() {
  return (
    <FloatingWhatsApp
      phoneNumber="+60128907763"
      accountName="AGG FM"
      avatar="/aggfm-logo.svg"
      statusMessage="Priyaa Mukiah"
      chatMessage="Hi, how can I help you?"
      placeholder="Type your message here ...."
      darkMode={true}
      className="floating-whatsapp"
      notificationSound={true}
      notification={true}
      notificationDelay={10}
      // allowClickAway
      allowEsc
    />
  );
}

export default WhatsAppWidget;
