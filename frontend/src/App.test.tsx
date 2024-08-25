import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import BalanceSheet from './App';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('BalanceSheet Component', () => {
  test('renders loading state initially', () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { Reports: [] } });
    render(<BalanceSheet />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders error message on failure', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));
    render(<BalanceSheet />);
    expect(await screen.findByText('Error: Failed to fetch data. Please try again later.')).toBeInTheDocument();
  });

  test('renders report data correctly', async () => {
    const mockData = {
      Reports: [
        {
          ReportID: '1',
          ReportName: 'Balance Sheet Report',
          ReportDate: '2024-08-23',
          Rows: [
            {
              RowType: 'Header',
              Cells: [
                { Value: 'Cell 1' },
                { Value: 'Cell 2' }
              ]
            },
            {
              RowType: 'Section',
              Title: 'Section Title',
              Rows: [
                {
                  Cells: [
                    { Value: 'Section Cell 1' },
                    { Value: 'Section Cell 2' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });
    render(<BalanceSheet />);
    expect(await screen.findByText('Balance Sheet Report')).toBeInTheDocument();
    expect(screen.getByText('2024-08-23')).toBeInTheDocument();
    expect(screen.getByText('Cell 1')).toBeInTheDocument();
    expect(screen.getByText('Section Title')).toBeInTheDocument();
    expect(screen.getByText('Section Cell 1')).toBeInTheDocument();
  });
});
