<?php

$con = new Mongodb\Client('mongodb://localhost:27017');

$profiles = $client->selectCollection('profilemanagement', 'profiles');




  // Insert the new profile
  $result = $profiles->insertOne([
    'name' => $_POST['name'],
    'age' => $_POST['age'],
    'contact' => $_POST['contact']
  ]);

  if ($result->getInsertedCount() === 1) {
    echo 'profile created successfully';
  } else {
    echo 'Failed to create profile';
  }

?>