export  interface Comment {
  text: string;
  comments?: Comment[]
}
export const comments:Comment[] = [
  {
    text: "1",
    comments: [
      {
        text: "1.1",
        comments: [
          {
            text: "1.1.1 "
          }
        ]
      },
      {
        text: "1.2",
        comments: [
          {
            text: "1.2.1",
            comments: [
              {
                text: "1.2.1",
                comments: [
                  {
                    text: "1.2.1", comments: [
                      {
                        text: "1.2.1"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    text: "2",
    comments: [
      {
        text: "2.1",
        comments: [
          {
            text: "2.1.1"
          }
        ]
      }
    ]
  }
];