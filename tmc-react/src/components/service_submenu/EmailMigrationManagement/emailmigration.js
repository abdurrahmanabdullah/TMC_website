import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import email from "../../../Asset/emailMigration/email.png";
import email2 from "../../../Asset/emailMigration/email2.png";
const EmailMigration = () => {
  const listData = [
    { id: 125, item: "Choosing the right cloud email provider for you" },
    { id: 126, item: "Planning how your data will be migrated" },
    { id: 127, item: "Migration" },
    { id: 128, item: "Installing email security measures" },
    { id: 129, item: "Integrating the Exchange email system" },
    { id: 130, item: "Upgrading Outlook so it works with your cloud email" },
    { id: 131, item: "Automating installation, activation, & updates" },
    { id: 132, item: "Implementing cloud data backups" },
  ];
  const emailPlatforms = [
    { id: 133, item: "Microsoft 365" },
    { id: 134, item: "Microsoft Exchange 2007+" },
    { id: 135, item: "Google Apps / G-Suite" },
    { id: 136, item: "Zimbra 6+" },
    { id: 137, item: "Open-Xchange" },
    { id: 138, item: "IMAP/POP" },
    { id: 139, item: "PST Files" },
  ];
  const documentStoragePlatforms = [
    { id: 140, item: "Microsoft OneDrive for Business" },
    { id: 141, item: "Microsoft SharePoint Server 2010+" },
    { id: 142, item: "Microsoft SharePoint Online" },
    { id: 143, item: "Google Vault" },
    { id: 144, item: "Google Drive" },
    { id: 145, item: "Dropbox" },
  ];
  const emailSecurityPlatforms = [
    { id: 146, item: "Barracuda Email Security" },
    { id: 147, item: "SpamTitan Email Security" },
    { id: 148, item: "Cisco Email Security" },
    { id: 149, item: "FortiMail" },
  ];
  return (
    <div className="main" style={{ padding: "4%" }}>
      <h2 style={{ textAlign: "center", marginBottom: "5%", color: "#20299F" }}>
        E-Mail Migration and Management
      </h2>

      <Row>
        <Col style={{ display: "block", width: 150, marginLeft: "10px" }}>
          <div>
            <p>
              <h5 style={{ display: "inline-block", color: "#0093FF" }}>
                {" "}
                Need to migrate emails and don't know how?
              </h5>{" "}
              Whether your company prefers a robust e-mail solution such as
              Microsoft 365 or a more nimble offering such as Google’s G-Suite
              or you want to use our own affordable but competitive solution
              Productive Office; our email migration experts have the experience
              necessary to make your email migration and management a simple,
              fast, and secure experience. We offer remote solutions as well as
              onsite options for companies looking for a more hands-on
              experience and can offer training and administration of your
              e-mail service post-migration.
            </p>
            <div className="management">
              <h4>
                We assist with all aspects of email migration and management,
                including:
              </h4>
              {/* Display the list */}
              <ul>
                {listData.map((item) => (
                  <li key={item.id}>{item.item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
        <Col>
          <div style={{ marginLeft: "140px", marginTop: "5%" }}>
            <img style={{ width: "80%" }} src={email} alt="Qbot Image" />
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: "4%" }}>
        <Col>
          <div>
            <img style={{ width: "100%" }} src={email2} alt="Qbot Image" />
          </div>
        </Col>
        <Col style={{ display: "block", width: 150, marginLeft: "15%" }}>
          <div className="EmailPlatform">
            <h3 style={{ color: "#0093FF" }}>E-mail Platforms:</h3>
            <ul>
              {emailPlatforms.map((platform) => (
                <li key={platform.id}>{platform.item}</li>
              ))}
            </ul>

            <div className="StoragePlatform">
              <h3>Document Storage Platform</h3>

              <ul
                style={{
                  listStyleType: "none",
                  padding: 0,
                  fontWeight: "bold",
                }}
              >
                {documentStoragePlatforms.map((storagelat) => (
                  <li key={storagelat.id}> &gt;{storagelat.item}</li>
                ))}
              </ul>
            </div>
            <div className="EmailSecurityGateway">
              <h3>Email Security Gateway</h3>
            </div>
            <ul>
              {emailSecurityPlatforms.map((security) => (
                <li key={security.id}>{security.item}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EmailMigration;
