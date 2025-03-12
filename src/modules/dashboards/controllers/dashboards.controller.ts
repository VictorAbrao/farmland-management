import { Controller, Get, Query } from '@nestjs/common';
import { DashboardsService } from '../services/dashboards.service';

@Controller('dashboards')
export class DashboardsController {
  constructor(private readonly dashboardsService: DashboardsService) {}

  @Get('summary')
  getSummary() {
    return this.dashboardsService.getSummary();
  }

  @Get('by-state')
  getByState(@Query('state') state?: string) {
    return this.dashboardsService.getByState(state);
  }

  @Get('by-culture')
  getByCulture(@Query('culture') culture?: string) {
    return this.dashboardsService.getByCulture(culture);
  }

  @Get('land-use')
  getLandUse() {
    return this.dashboardsService.getLandUse();
  }
}
