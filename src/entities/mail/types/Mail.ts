export interface Part {
  partId: string;
  mimeType: string;
  body: {
    data: string;
  };
  parts: null;
}

export interface Mail {
  gmailId: string;
  title: string;
  from: string;
  to: string;
  subject: string;
  date: string;
  isRead: boolean;
  labels: string[];
  parts?: Part[];
}
