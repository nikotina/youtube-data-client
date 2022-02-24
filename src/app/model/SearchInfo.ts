export interface SearchInfo {
  id: number;
  created: Date;
  createdBy: string;
  updated: Date;
  updatedBy: string;
  currentPageToken: string;
  nextPageToken: string;
  searchKey: string;
  totalCount: number;
}
