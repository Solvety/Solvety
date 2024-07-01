-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2024 at 03:20 PM
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
-- Database: `qwestyparti`
--

-- --------------------------------------------------------

--
-- Table structure for table `parti`
--

CREATE TABLE `parti` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` text NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parti`
--

INSERT INTO `parti` (`id`, `email`, `username`, `password`, `is_active`) VALUES
(1, 'emenikesomtochukwu2002@gmail.com', 'Stepo', '$2y$10$O.AcdjzusiEqR3kYxzuHZ.4vTFl99FuvefQCeId06Njooy6F8b/Ue', 0),
(3, 'emenikeaugustine301@gmail.co', 'Multitelo', '$2y$10$.YuX7w1u2krZkYRKu.P.Me17i/xhVIITknh1fLATHmTw5E4k6Uqh6', 0),
(4, 'emenikeaugustine31@gmail.com', 'christopher442', '$2y$10$ewbp8FJqgmsYN6bJSCQvW.3pLyqARKymTuM1RWdWVulbYjN515OXy', 0),
(5, 'emenikeaugstine301@gmail.com', 'dev3', '$2y$10$Zml07hQxy2jEIvH4iu3X5ODR93OZ.WK6daGBXK/poVtm1Nz/e2JNW', 0),
(6, 'emenikeaugusine301@gmail.com', 'Multitelo3', '$2y$10$M/sQ.1P1c8VVBv0hw9LfzeraxqLrIfhm1xtovfPFtX2qLZvhqVmWK', 0),
(9, 'emenikeauguine301@gmail.com', 'Multielo3', '$2y$10$tYQgDy9xtdDsABqZp9jJN.iex2M37uzZPAAdN2jeS44.9v8DaRD2O', 0),
(11, 'emenikeaugustine301@gmail.coj', 'dev67', '$2y$10$NyBKwZNDPZ39.3Z49DfzvejPYG0PvqwuW9AVug9odJtYUSOVEBlVu', 0),
(12, 'emenikeaugustine301@gmail.com', 'Multitelo27', '$2y$10$I5VH6eWdZ7/awRVfqBHDCetJlrsabTAVt1AMt6KW7pqDNpTlCuJiS', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_otp`
--

CREATE TABLE `user_otp` (
  `id` int(11) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `otp` varchar(6) NOT NULL,
  `expires_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `parti`
--
ALTER TABLE `parti`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`) USING HASH;

--
-- Indexes for table `user_otp`
--
ALTER TABLE `user_otp`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `parti`
--
ALTER TABLE `parti`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user_otp`
--
ALTER TABLE `user_otp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_otp`
--
ALTER TABLE `user_otp`
  ADD CONSTRAINT `user_otp_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `parti` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
