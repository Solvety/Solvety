-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2024 at 03:52 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `survey`
--

-- --------------------------------------------------------

--
-- Table structure for table `participantanswers`
--

CREATE TABLE `participantanswers` (
  `AnswerID` bigint(20) NOT NULL,
  `SurveyID` bigint(20) NOT NULL,
  `ParticipantID` bigint(20) NOT NULL,
  `QuestionID` bigint(20) NOT NULL,
  `AnswerText` text DEFAULT NULL,
  `AnswerOption` int(11) DEFAULT NULL,
  `AnswerImageURL` varchar(255) DEFAULT NULL,
  `AnswerDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `participantregistry`
--

CREATE TABLE `participantregistry` (
  `id` bigint(20) NOT NULL,
  `participant_id` bigint(20) NOT NULL,
  `registered_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `researcherregistry`
--

CREATE TABLE `researcherregistry` (
  `id` bigint(20) NOT NULL,
  `researcher_id` bigint(20) NOT NULL,
  `registered_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `researcherregistry`
--

INSERT INTO `researcherregistry` (`id`, `researcher_id`, `registered_at`) VALUES
(6, 6, '2024-03-20 13:38:30');

-- --------------------------------------------------------

--
-- Table structure for table `surveyquestions`
--

CREATE TABLE `surveyquestions` (
  `QuestionID` bigint(20) NOT NULL,
  `SurveyID` bigint(20) NOT NULL,
  `QuestionText` text DEFAULT NULL,
  `QuestionOrder` int(11) DEFAULT NULL,
  `QuestionType` varchar(20) NOT NULL DEFAULT 'single_choice',
  `Options` longtext DEFAULT NULL,
  `ImageURL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `surveyquestions`
--

INSERT INTO `surveyquestions` (`QuestionID`, `SurveyID`, `QuestionText`, `QuestionOrder`, `QuestionType`, `Options`, `ImageURL`) VALUES
(38, 6, 'What is your favorite color?', 0, 'multiple_choice', '[\"Red\",\"Blue\",\"Green\",\"Yellow\"]', NULL),
(39, 6, 'What is your favorite color?', 0, 'multiple_choice', '[\"Red\",\"Blue\",\"Green\",\"Yellow\"]', NULL),
(40, 6, 'What is your favorite color?', 1, 'multiple_choice', '[\"Red\",\"Blue\",\"Green\",\"Yellow\"]', NULL),
(41, 6, 'What do you see in the image?', 2, 'image', NULL, 'uploads/65ff1260090bc.jpg'),
(42, 6, 'What is your favorite color?', 1, 'multiple_choice', '[\"Red\",\"Blue\",\"Green\",\"Yellow\"]', NULL),
(43, 6, 'What do you see in the image?', 2, 'image', '[\"Red\",\"Blue\",\"Green\",\"Yellow\"]', 'uploads/65ff1370b91d1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `surveys`
--

CREATE TABLE `surveys` (
  `SurveyID` bigint(20) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Description` text DEFAULT NULL,
  `SurveyType` varchar(255) DEFAULT NULL,
  `FieldOfResearch` varchar(255) DEFAULT NULL,
  `ResearcherID` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `surveys`
--

INSERT INTO `surveys` (`SurveyID`, `Title`, `Description`, `SurveyType`, `FieldOfResearch`, `ResearcherID`) VALUES
(3, 'Climate Change Awareness Survey', 'A survey to assess public awareness on climate change.', 'Online', 'Environmental Science', 6),
(4, 'Climate Change Awareness Survey', 'A survey to assess public awareness on climate change.', 'Online', 'Environmental Science', 6),
(5, 'Climate Change Awareness Survey', 'A survey to assess public awareness on climate change.', 'Online', 'Environmental Science', 6),
(6, 'Climate Change Awareness Survey', 'A survey to assess public awareness on climate change.', 'Online', 'Environmental Science', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `participantanswers`
--
ALTER TABLE `participantanswers`
  ADD PRIMARY KEY (`AnswerID`),
  ADD KEY `SurveyID` (`SurveyID`),
  ADD KEY `ParticipantID` (`ParticipantID`),
  ADD KEY `QuestionID` (`QuestionID`);

--
-- Indexes for table `participantregistry`
--
ALTER TABLE `participantregistry`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `participant_id` (`participant_id`);

--
-- Indexes for table `researcherregistry`
--
ALTER TABLE `researcherregistry`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `researcher_id` (`researcher_id`);

--
-- Indexes for table `surveyquestions`
--
ALTER TABLE `surveyquestions`
  ADD PRIMARY KEY (`QuestionID`),
  ADD KEY `SurveyID` (`SurveyID`);

--
-- Indexes for table `surveys`
--
ALTER TABLE `surveys`
  ADD PRIMARY KEY (`SurveyID`),
  ADD KEY `ResearcherID` (`ResearcherID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `participantanswers`
--
ALTER TABLE `participantanswers`
  MODIFY `AnswerID` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `participantregistry`
--
ALTER TABLE `participantregistry`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `researcherregistry`
--
ALTER TABLE `researcherregistry`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `surveyquestions`
--
ALTER TABLE `surveyquestions`
  MODIFY `QuestionID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `surveys`
--
ALTER TABLE `surveys`
  MODIFY `SurveyID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `participantanswers`
--
ALTER TABLE `participantanswers`
  ADD CONSTRAINT `participantanswers_ibfk_1` FOREIGN KEY (`SurveyID`) REFERENCES `surveys` (`SurveyID`),
  ADD CONSTRAINT `participantanswers_ibfk_2` FOREIGN KEY (`ParticipantID`) REFERENCES `participantregistry` (`participant_id`),
  ADD CONSTRAINT `participantanswers_ibfk_3` FOREIGN KEY (`QuestionID`) REFERENCES `surveyquestions` (`QuestionID`);

--
-- Constraints for table `surveyquestions`
--
ALTER TABLE `surveyquestions`
  ADD CONSTRAINT `surveyquestions_ibfk_1` FOREIGN KEY (`SurveyID`) REFERENCES `surveys` (`SurveyID`);

--
-- Constraints for table `surveys`
--
ALTER TABLE `surveys`
  ADD CONSTRAINT `surveys_ibfk_1` FOREIGN KEY (`ResearcherID`) REFERENCES `researcherregistry` (`researcher_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
