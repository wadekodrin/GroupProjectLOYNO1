CREATE DATABASE LOYONO_1_DB;

CREATE TABLE Companies (
  Company_ID INT NOT NULL AUTO_INCREMENT,
  Company_Name VARCHAR(255),
  Website VARCHAR(255),
  LOG_URL VARCHAR(255),
  PRIMARY KEY (Company_ID)
);

CREATE TABLE NOLATECH_Calc (
  NTID INT NOT NULL AUTO_INCREMENT,
  Title VARCHAR(255),
  Avg_Exp INT,
  Min_Sal INT,
  Max_Sal INT,
  Avg_Sal INT,
  PRIMARY KEY (NTID)
);

CREATE TABLE Openings (
  Listing INT NOT NULL AUTO_INCREMENT,
  Company_ID INT,
  Position VARCHAR(255),
  Position_Source VARCHAR(255),
  NTID INT,
  PRIMARY KEY (Listing),
  FOREIGN KEY (Company_ID) REFERENCES Companies (Company_ID),
  FOREIGN KEY (NTID) REFERENCES NOLATECH_Calc(NTID)
);

INSERT INTO NOLATECH_Calc (Title,Avg_Exp,Min_Sal,Max_Sal,Avg_Sal) Values 
('Front End Developer',6, 50000, 88000, 71583),
('Product Manager',5, 45760, 80000, 64753),
('QA/QC',4, 24000, 145000, 68166),
('Software Engineer',7, 22000, 165000, 87727);

INSERT INTO Companies (Company_Name,Website) Values
('Acrew','https://www.acrew.co/'),
('Audiosocket','https://www.audiosocket.com/'),
('ChapterSpot','https://www.chapterspot.com/'),
('CivicSource','https://www.civicsource.com/'),
('Cotinga soft','https://cotingasoft.com/'),
('Entrecscan','https://entrescan.com/'),
('exemptmenow','https://www.exemptmenow.com/'),
('FSC Interactive','https://fscinteractive.com/'),
('Gameloft','http://www.gameloft.com/en/'),
('GE Digital','https://www.ge.com/digital/'),
('Geocent','https://www.geocent.com/'),
('Globalstar','https://www.globalstar.com/'),
('GNO INC','http://gnoinc.org/'),
('High Voltage Software','http://www.high-voltage.com/'),
('Hop & Jaunt','http://www.hopandjaunt.com/'),
('inFRONT','http://www.infrontusa.com/'),
('Inxile','https://inxile-entertainment.com/'),
('Iseatz','http://www.iseatz.com/'),
('Kickboard','https://www.kickboardforschools.com/'),
('Lucid','https://luc.id/'),
('Mobilequbes','http://www.mobilequbes.com/'),
('mums software','https://www.mumms.com/'),
('Netchex','https://netchexonline.com/'),
('Online Optimism','https://www.onlineoptimism.com/'),
('oseberg','https://oseberg.io/'),
('Plantbid','https://plantbid.com/'),
('Realized Designs','http://www.realized-designs.com/'),
('Reverly','https://revelry.co/'),
('Search Influence','https://www.searchinfluence.com/'),
('SmashingBoxes','https://smashingboxes.com/'),
('Spectrum Interactive','http://spectruminteractive.co/'),
('SUSCO','http://suscosolutions.com/'),
('Torsh','http://www.torsh.co/'),
('Turbosquid','https://www.turbosquid.com/'),
('VL group','http://vlgroup.com/'),
('365 connect','https://www.365connect.com/'),
('Zlien','https://www.zlien.com/');

INSERT INTO Openings (Company_ID,Position,Position_Source,NTID) Values
(4,'Senior Developer','https://www.civicsource.com/careers/',4),
(10,'Technical Writer','https://talent.gecareers.com/digital/position/application-operations-engineer-new-orleans-la-1',2),
(10,'Sr Software Engineer','https://talent.gecareers.com/digital/position/quality-assurance-engineer-new-orleans-la-6',4),
(10,'Sr Quality Assurance Engineer','https://talent.gecareers.com/digital/position/software-engineering-specialist-new-orleans-la-6',3),
(10,'Sr Staff Software Architect','https://talent.gecareers.com/digital/position/sr-manager-software-engineering-new-orleans-la-2',4),
(10,'Software Engineer','https://talent.gecareers.com/digital/position/staff-agile-transformer-new-orleans-la-2',4),
(10,'Sr Product Security Analyst','https://talent.gecareers.com/digital/position/technical-writer-new-orleans-la-1',4),
(10,'Sr Software Engineer','https://talent.gecareers.com/digital/position/sr-software-engineer-new-orleans-la-28',4),
(10,'Sr Technical Product Manager','https://talent.gecareers.com/digital/position/sr-quality-assurance-engineer-new-orleans-la-6',2),
(10,'Sr Staff Technical Product Manager','https://talent.gecareers.com/digital/position/sr-staff-software-architect-new-orleans-la-3',2),
(10,'Lead Fpa Analyst','https://talent.gecareers.com/digital/position/software-engineer-new-orleans-la-19',3),
(10,'Sr Software Engineer','https://talent.gecareers.com/digital/position/sr-product-security-analyst-new-orleans-la-1',4),
(10,'Sr Quality Assurance Engineer','https://talent.gecareers.com/digital/position/sr-software-engineer-new-orleans-la-27',3),
(10,'Software Engineer','https://talent.gecareers.com/digital/position/sr-technical-product-manager-new-orleans-la-4',4),
(10,'Lead Services Specialist','https://talent.gecareers.com/digital/position/sr-staff-technical-product-manager-new-orleans-san-ramon-united-states',2),
(10,'Sr Software Engineer','https://talent.gecareers.com/digital/position/lead-fpa-analyst-new-orleans-la',4),
(10,'Staff Agile Transformer','https://talent.gecareers.com/digital/position/sr-software-engineer-new-orleans-la-24',2),
(10,'Sr Build Release Engineer','https://talent.gecareers.com/digital/position/sr-quality-assurance-engineer-new-orleans-la-3',4),
(10,'Staff Digital Auditor','https://talent.gecareers.com/digital/position/software-engineer-new-orleans-la-15',3),
(10,'Senior Software Engineer','https://talent.gecareers.com/digital/position/lead-services-specialist-1-digital-application-services-houston-san-ramon-new-orleans-united-states',4),
(10,'Technical Sourcer Digital Technology','https://talent.gecareers.com/digital/position/sr-software-engineer-new-orleans-la-19',2),
(10,'Staff Agile Transformer','https://talent.gecareers.com/digital/position/staff-agile-transformer-new-orleans-la-1',2),
(10,'Sr Build Release Engineer','https://talent.gecareers.com/digital/position/sr-build-release-engineer-new-orleans-la-1',4),
(10,'Senior Software Engineer','https://talent.gecareers.com/digital/position/senior-software-engineer-new-orleans-la-usa-1',4),
(14,'UI Artist','https://highvoltagesoftware.bamboohr.com/jobs/view.php?id=17',1),
(18,'Software Development Team Lead','https://www.iseatz.com/assets/Software_Development_Team_Lead.pdf',2),
(18,'DevOps Engineer','https://www.iseatz.com/assets/DevOps%20Engineer.pdf',2),
(18,'Software Test Engineer','https://www.iseatz.com/assets/Software_Test_Engineer.pdf',3),
(18,'Senior Software Developer','https://www.iseatz.com/assets/Senior_Software_Developer_JD.pdf',4);


