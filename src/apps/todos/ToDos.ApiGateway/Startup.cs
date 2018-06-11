using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

using Ocelot.DependencyInjection;
using Ocelot.Middleware;

namespace ToDos.ApiGateway
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IHostingEnvironment hostingEnvironment) {
            Configuration = configuration;
            HostingEnvironment = hostingEnvironment;
        }

        public IConfiguration Configuration { get; }

        public IHostingEnvironment HostingEnvironment { get; }

        public void ConfigureServices(IServiceCollection services) {
            services.AddOcelot();

            if (HostingEnvironment.IsDevelopment()) {
                services.AddCors();
            }
        }

        public void Configure(IApplicationBuilder app) {
            if (HostingEnvironment.IsDevelopment()) {
                app.UseCors(cp => {
                    cp
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                });
            }

            app.UseWebSockets();
            app.UseOcelot().Wait();
        }
    }
}
