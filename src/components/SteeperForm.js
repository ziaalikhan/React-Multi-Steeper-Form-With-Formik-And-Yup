import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormOne from "./form1";
import FormTwo from "./form2";
import FormThree from "./form3";
import UserDetail from '../components/UserDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Enter Your Name", "Enter Your Email and Profession", "Enter Your City and Desc"];
}

function getStepContent(stepIndex, handleNext) {
  switch (stepIndex) {
    case 0:
      return <FormOne handleNext={handleNext} />;
    case 1:
      return <FormTwo handleNext={handleNext} />;
    case 2:
      return <FormThree handleNext={handleNext} />;
    default:
      return "Unknown stepIndex";
  }
}

export default function StepperForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="mainContainer">
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div className="end">
             <UserDetail />
              <Button className="btn" onClick={handleReset}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep, handleNext)}
                
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
