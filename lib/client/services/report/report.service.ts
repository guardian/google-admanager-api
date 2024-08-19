import type { Client } from 'soap';
import type { Statement } from '../../../common/types';
import type { ExportFormat, ReportJobStatus } from './report.enum';
import type { ReportDownloadOptions, ReportJob, SavedQueryPage } from './report.type';
import type { ReportServiceOperations } from './reportService.interface';

export class ReportService implements ReportServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async getReportDownloadURL(reportJobId: number, exportFormat: ExportFormat): Promise<string> {
    return this._client.getReportDownloadURL({ reportJobId, exportFormat });
  }

  getReportDownloadUrlWithOptions(reportJobId: number, reportDownloadOptions: ReportDownloadOptions): Promise<string> {
    return this._client.getReportDownloadUrlWithOptions({
      reportJobId,
      reportDownloadOptions,
    });
  }
  getReportJobStatus(reportJobId: number): Promise<ReportJobStatus> {
    return this._client.getReportJobStatus({
      reportJobId,
    });
  }
  getSavedQueriesByStatement(filterStatement: Statement): Promise<SavedQueryPage> {
    return this._client.getSavedQueriesByStatement({
      filterStatement,
    });
  }
  runReportJob(reportJob: ReportJob): Promise<ReportJob> {
    return this._client.runReportJob({
      reportJob,
    });
  }
}
