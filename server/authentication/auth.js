const express = require('express');
const Student = require('../model/studentmodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.loginf= async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the student exists in the database
    const Student = await Student.findOne({ username });

    if (!Student) {
      return res.status(404).json({ message: 'Student not found.' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, student.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { username: Student.username, rollNumber: Student.rollNumber },
      'your-secret-key', // Replace with your own secret key
      { expiresIn: '1h' } // Set the expiration time of the token
    );

    res.json({ token });
  } catch (error) {
    res.status(500).send({message:error.message || "Error occured while find operation"})
  }
};
