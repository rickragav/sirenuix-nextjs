import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:'191174149513-tvjt7o8kci7mhfpm2q378ud97l1dk2nj.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
  secret: "03Hb5lMC1sl72+61NsdW3b0hgUxZprnQTaBP6Y2+GzI=",
  session: {
    strategy: "jwt",
  },
};
export default NextAuth(authOptions);
