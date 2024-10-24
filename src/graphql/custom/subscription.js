export const onCreateBusinessUploadHistory = /* GraphQL */ `
  subscription OnCreateBusinessUploadHistory(
    $filter: ModelSubscriptionBusinessUploadHistoryFilterInput
  ) {
    onCreateBusinessUploadHistory(filter: $filter) {
      id
      uploadDate
      completionDate
      validCount
      total
      invalidCount
      originalPath
      invalidPath
      createdAt
      updatedAt
    }
  }
`;
