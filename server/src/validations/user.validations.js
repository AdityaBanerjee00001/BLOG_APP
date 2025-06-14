import { body } from "express-validator";
export const userRegistrationValidator = () => {
  return [
    body("firstname")
      .trim()
      .notEmpty()
      .withMessage("FIRST NAME IS REQUIRED")
      .isLength({ min: 3 })
      .withMessage(" FIRST NAME MUST BE ATLEAST THREE CHARACTER LONG")
      .isLength({ max: 20 })
      .withMessage("FIRST NAME MUST BE LESS THAN 20 CHARACTERS"),

    body("lastname")
      .trim()
      .notEmpty()
      .withMessage("LAST NAME IS REQUIRED")
      .isLength({ min: 3 })
      .withMessage("LAST NAME MUST BE ATLEAST THREE CHARACTER LONG")
      .isLength({ max: 20 })
      .withMessage("LAST NAME MUST BE LESS THAN 20 CHARACTERS"),

    body("username")
      .trim()
      .notEmpty()
      .withMessage("USER NAME IS REQUIRED")
      .isLength({ min: 3 })
      .withMessage("USER NAME MUST BE ATLEAST THREE CHARACTER LONG")
      .isLength({ max: 20 })
      .withMessage("FIRST NAME MUST BE LESS THAN 20 CHARACTERS"),

    body("email")
      .trim()
      .notEmpty()
      .withMessage("EMAIL IS REQUIRED")
      .isEmail()
      .withMessage("PLEASE ENTER A VALID EMAIL"),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("PASSWORD IS REQUIRED")
      .isLength({ min: 6 })
      .withMessage("PASSWORD MUST BE ATLEAST SIX CHARACTER LONG")
      .isLength({ max: 12 })
      .withMessage("PASSWORD MUST BE LESS THAN TWELVE CHARACTERS")
      .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]).+$/)
      .withMessage(
        "PASSWORD MUST CONTAIN A UPEER-CASE AND A SPECIAL CHARACTER",
      ),
  ];
};

export const userLoginValidator = () => {
  return [
    body("username")
      .trim()
      .notEmpty()
      .withMessage("USER NAME IS REQUIRED")
      .isLength({ min: 3 })
      .withMessage("USER NAME MUST BE ATLEAST THREE CHARACTER LONG")
      .isLength({ max: 20 })
      .withMessage("FIRST NAME MUST BE LESS THAN 20 CHARACTERS"),

    body("email")
      .trim()
      .notEmpty()
      .withMessage("EMAIL IS REQUIRED")
      .isEmail()
      .withMessage("PLEASE ENTER A VALID EMAIL"),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("PASSWORD IS REQUIRED")
      .isLength({ min: 6 })
      .withMessage("PASSWORD MUST BE ATLEAST SIX CHARACTER LONG")
      .isLength({ max: 12 })
      .withMessage("PASSWORD MUST BE LESS THAN TWELVE CHARACTERS")
      .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]).+$/)
      .withMessage(
        "PASSWORD MUST CONTAIN A UPEER-CASE AND A SPECIAL CHARACTER",
      ),
  ];
};

export const userUpdateValidaton = () => {
  return [
    body("username")
      .trim()
      .isLength({ min: 3 })
      .withMessage("USER NAME MUST BE ATLEAST THREE CHARACTER LONG")
      .isLength({ max: 20 })
      .withMessage("USER NAME MUST BE LESS THAN 20 CHARACTERS")
      .optional(),

    body("bio")
      .trim()
      .isLength({ min: 10 })
      .withMessage("BIO MUST BE ATLEAST TEN CHARACTER LONG")
      .isLength({ max: 100 })
      .withMessage("BIO  MUST BE LESS THAN 100 CHARACTERS")
      .optional(),

    body("twitter")
      .trim()
      .isLength({ min: 3 })
      .withMessage("TWITTER LINK MUST BE ATLEAST THREE CHARACTER LONG")
      .isLength({ max: 200 })
      .withMessage("TWITTER LINK MUST BE LESS THAN 200 CHARACTERS")
      .optional(),

    body("github")
      .trim()
      .isLength({ min: 3 })
      .withMessage("GITHUB LINK MUST BE ATLEAST THREE CHARACTER LONG")
      .isLength({ max: 200 })
      .withMessage("GITHUB LINK MUST BE LESS THAN 200 CHARACTERS")
      .optional(),

    body("website")
      .trim()
      .isLength({ min: 3 })
      .withMessage("WEBSITE LINK MUST BE ATLEAST THREE CHARACTER LONG")
      .isLength({ max: 200 })
      .withMessage("WEBSITE LINK MUST BE LESS THAN 200 CHARACTERS")
      .optional(),
  ];
};
