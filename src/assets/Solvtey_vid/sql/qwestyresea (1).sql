-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2024 at 03:19 PM
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
-- Database: `qwestyresea`
--

-- --------------------------------------------------------

--
-- Table structure for table `pwd_reset_tokens`
--

CREATE TABLE `pwd_reset_tokens` (
  `id` int(11) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `token` varchar(255) NOT NULL,
  `expiration_time` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pwd_reset_tokens`
--

INSERT INTO `pwd_reset_tokens` (`id`, `user_id`, `token`, `expiration_time`, `created_at`) VALUES
(1, 6, '74313da78a3f7eb18bf7cf212c4e7e53', '2024-03-23 12:23:02', '2024-03-23 10:23:02');

-- --------------------------------------------------------

--
-- Table structure for table `resead`
--

CREATE TABLE `resead` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` text NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `resead`
--

INSERT INTO `resead` (`id`, `email`, `username`, `password`, `is_active`) VALUES
(6, 'emenikeaugustine301@gmail.com', 'Multitelo', '$2y$10$1sBlb6PlwJrlGVgWFNY2oOgh4CMp659NodJMLprarZoYw8bJFhLr.', 1);

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
-- Dumping data for table `user_otp`
--

INSERT INTO `user_otp` (`id`, `user_id`, `otp`, `expires_at`) VALUES
(21, 6, '94475', '2024-03-18 11:58:05'),
(28, 6, '92346', '2024-03-21 23:55:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pwd_reset_tokens`
--
ALTER TABLE `pwd_reset_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `resead`
--
ALTER TABLE `resead`
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
-- AUTO_INCREMENT for table `pwd_reset_tokens`
--
ALTER TABLE `pwd_reset_tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `resead`
--
ALTER TABLE `resead`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user_otp`
--
ALTER TABLE `user_otp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pwd_reset_tokens`
--
ALTER TABLE `pwd_reset_tokens`
  ADD CONSTRAINT `pwd_reset_tokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `resead` (`id`);

--
-- Constraints for table `user_otp`
--
ALTER TABLE `user_otp`
  ADD CONSTRAINT `user_otp_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `resead` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
