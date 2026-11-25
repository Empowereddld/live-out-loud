import { Button } from "./SiteButton";
import { Input } from "./SiteInput";
import { site } from "@/data/site";

/**
 * Opens the Beehiiv sign-up page in a new tab,
 * passing along the email typed here (?email=...).
 */
const SignupForm = () => {
  const { hero } = site;

  return (
    <form
      action={hero.signupLink}
      method="get"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="signup-email" className="sr-only">
        Email address
      </label>
      <Input
        id="signup-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder={hero.emailPlaceholder}
        className="sm:flex-1"
      />
      <Button type="submit" variant="rose" size="default" className="shrink-0">
        {hero.buttonText}
      </Button>
    </form>
  );
};

export default SignupForm;
