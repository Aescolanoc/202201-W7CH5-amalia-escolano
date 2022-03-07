import axios from "axios";
import { getAllUsers, getUserDetails, updateUser, login, register } from "./api";

jest.mock("axios");

describe("Given apiConnection", () => {
  describe("When getTasks is called", () => {
    beforeEach(() => {
      axios.get.mockResolvedValue({ data: "Mocked response" });
      axios.patch.mockResolvedValue({ data: "Mocked response" });
      axios.post.mockResolvedValue({ data: "Mocked response" });
    });
    test("It should return mocked data", async () => {
      expect(await getAllUsers({ id: 1 })).toEqual({ data: "Mocked response" });
    });
    test("It should return mocked data", async () => {
      expect(await getUserDetails({ id: 1 })).toEqual({ data: "Mocked response" });
    });
    test("It should return mocked data", async () => {
      expect(await updateUser({ id: 1 })).toEqual({ data: "Mocked response" });
    });
    test("It should return mocked data", async () => {
      expect(await login({ id: 1 })).toEqual({ data: "Mocked response" });
    });
    test("It should return mocked data", async () => {
      expect(await register({ id: 1 })).toEqual({ data: "Mocked response" });
    });
  });
});
