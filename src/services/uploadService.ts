import { uploadApi } from '@/lib/axios';

export interface UploadResponse {
  id: number;
  nombre: string;
  publicId: string;
  url: string;
  size: number;
  uploadedAt: string;
}

export interface Document {
  id: number;
  nombre: string;
  publicId: string;
  url: string;
  size: string | null;
  mimeType: string | null;
  uploadedAt: string;
}

class UploadService {
  
  async uploadOwlFile(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await uploadApi.post<UploadResponse>('/upload/owl', formData);
    return response.data;
  }

  async listDocuments(): Promise<Document[]> {
    const response = await uploadApi.get<Document[]>('/upload/documents');
    return response.data;
  }

  async getDocument(id: number): Promise<Document> {
    const response = await uploadApi.get<Document>(`/upload/document/${id}`);
    return response.data;
  }

  async deleteDocument(id: number): Promise<{ message: string }> {
    const response = await uploadApi.delete<{ message: string }>(`/upload/document/${id}`);
    return response.data;
  }
}

export const uploadService = new UploadService();
