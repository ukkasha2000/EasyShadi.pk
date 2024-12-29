import React from "react";
import { Form, Input, Button, Image } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

const SignUp = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form failed:", errorInfo);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md shadow-lg rounded-lg p-8 text-center bg-color-primary">
        <Image
          src="assets/images/Logo.png"
          width={200}
          preview={false}
          alt="EasyShadi.pk"
        />
        <h1 className="text-xl lg:text-3xl font-semibold mb-6 text-primary">
          Create Account
        </h1>

        {/* Sign-Up Form */}
        <Form
          name="sign-up"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* Username Input */}
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              placeholder="Enter your username"
              className="rounded-md border-color-primary"
              size="large"
            />
          </Form.Item>

          {/* Email Input */}
          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
              className="rounded-md border-color-primary"
              size="large"
            />
          </Form.Item>

          {/* Password Input */}
          <Form.Item
            className="mb-6"
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="Enter your password"
              className="rounded-md border-color-primary"
              size="large"
            />
          </Form.Item>

          {/* Confirm Password */}
          <Form.Item
            className="mb-6"
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Confirm your password"
              className="rounded-md border-color-primary"
              size="large"
            />
          </Form.Item>

          {/* Sign-Up Button */}
          <Form.Item className="mb-0">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full text-white rounded-md bg-color-secondary"
              size="large"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="flex items-center justify-center my-2">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="border-t border-gray-300 w-full"></div>
        </div>

        {/* Social Sign-Up Options */}
        <div className="flex flex-col gap-4">
          <Button
            type="primary"
            className="w-full rounded-md text-white flex items-center justify-center bg-color-secondary"
            size="large"
            icon={<GoogleOutlined />}
          >
            Sign up with Google
          </Button>
        </div>

        {/* Terms and Privacy */}
        <div className="text-center mt-4 text-xs text-gray-500">
          By creating your EasyShadi.pk account you agree to our{" "}
          <a
            href="/termsofuse"
            target="blank"
            className="font-semibold text-primary"
          >
            Terms of Use
          </a>{" "}
          and{" "}
          <a
            href="/privacypolicy"
            target="blank"
            className="font-semibold text-primary"
          >
            Privacy Policy
          </a>
          .
        </div>

        {/* Login Link */}
        <div className="text-center mt-6">
          <span className="text-gray-500">Already have an account? </span>
          <a href="/signin" className="no-underline font-semibold text-primary">
            Sign In
          </a>
        </div>

        {/* Register As Vendor */}
        <div className="text-center mt-2">
          <span className="text-gray-500">Are you a vendor? </span>
          <a href="#" className="no-underline font-semibold text-primary">
            Join Our Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
