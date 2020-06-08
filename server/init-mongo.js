db.createUser(
  {
    user: "keenious",
    pwd: "pass",
    roles: [
      { role: "userAdminAnyDatabase", db: "admin" },
      { role: "readWriteAnyDatabase", db: "admin" }
    ]
  }
);
