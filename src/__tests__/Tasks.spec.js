import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Tasks } from "../components/Tasks";
import { useSelectedProjectValue } from "../context";

jest.mock("../context", () => ({
  useSelectedProjectValue: jest.fn(),
  useProjectsValue: jest.fn(() => ({
    projects: [
      {
        name: "♫ Music",
        projectId: "1",
        userID: "cookiez253",
        docId: "music",
      },
      {
        name: "📈 Work",
        projectId: "2",
        userID: "cookiez253",
        docId: "work",
      },
      {
        name: "🙇🏽‍♂️ Study",
        projectId: "3",
        userID: "cookiez253",
        docId: "study",
      },
      {
        name: "🏡Chores",
        projectId: "-M8cl_zu------------",
        userID: "cookiez253",
        docId: "chores",
      },
    ],
  })),
}));

jest.mock("../hooks", () => ({
  useTasks: () => ({
    tasks: [
      {
        id: "mx2taaXpF38vYqMGbVtY",
        archived: false,
        date: "21/07/2019",
        projectId: "1",
        task:
          "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
        userId: "jlIFXIwyAL3tzHMtzRbw",
      },
    ],
  }),
}));

beforeEach(cleanup);

describe("<Tasks />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders tasks", () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => "INBOX"),
      selectedProject: "INBOX",
    }));

    const { queryByTestId } = render(<Tasks />);
    expect(queryByTestId("tasks")).toBeTruthy();
    expect(queryByTestId("project-name").textContent).toBe("Inbox");
  });

  it("renders a task with a project title", () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => "1"),
      selectedProject: "1",
    }));

    const { queryByTestId } = render(<Tasks />);
    expect(queryByTestId("tasks")).toBeTruthy();
    expect(queryByTestId("project-name").textContent).toBe("♫ Music");
  });

  it("renders a task with a collated title", () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => "INBOX"),
      selectedProject: "INBOX",
    }));

    const { queryByTestId } = render(<Tasks />);
    expect(queryByTestId("tasks")).toBeTruthy();
    expect(queryByTestId("project-name").textContent).toBe("Inbox");
  });
});
